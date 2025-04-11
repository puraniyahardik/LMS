import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// export const clearWebHooks = async (req, res) => {
//     try {
//         const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//        let verify =  await whook.verify(JSON.stringify(req.body),{
//             'svix-id': req.headers['svix-id'],
//             'svix-timestamp': req.headers['svix-timestamp'],
//             'webhook-signature': req.headers['webhook-signature']
//         });
//         console.log(verify);

//         const {data, type} = req.body;
// console.log(data, type);

//         switch (type) {
//             case 'user.created': {
//                 const userData = {
//                     _id: data.id,
//                     email: data.email.address[0].email_address,
//                     name: data.first_name + " " + data.last_name,
//                     imageUrl: data.imageUrl
//                 }

//                 let res = await userModel.create(userData);
//                 console.log(res);

//                 res.json({success: true, result: res})
//                 break;
//             }
//             case 'user.updated': {
//                 const userData = {

//                     email: data.email.address[0].email_address,
//                     name: data.first_name + " " + data.last_name,
//                     imageUrl: data.imageUrl
//                 }

//                 await userModel.findByIdAndUpdate(data.id, userData);
//                 res.json({})
//                 break;
//             }

//             case 'user.deleted': {
//                 await userModel.findByIdAndDelete(data.id);
//                 res.json({})
//                 break;
//             }

//             default:
//                 break;
//         }

//     } catch (error) {
//         res.json({success: false, message: error.message})
//         console.error(error);

//     }
// }

// In clearWebHooks function:
export const clearWebHooks = async (req, res) => {
  try {
    // 1. Properly verify webhook
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    try {
      const payload = await whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
      });
      
      // Verification successful
      console.log("Webhook verified:", payload);
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return res
        .status(400)
        .json({ success: false, message: "Webhook verification failed" });
    }

    const { data, type } = req.body;
    console.log("Webhook data:", data);
    console.log("Webhook type:", type);

    // 2. Handle different event types
    switch (type) {
      case "user.created": {
        // Check if email exists and has the expected structure
        if (!data.email_addresses || !data.email_addresses.length) {
          return res
            .status(400)
            .json({ success: false, message: "No email found in user data" });
        }

        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };

        const user = await userModel.create(userData);
        console.log("User created:", user);

        return res.json({ success: true, result: user });
      }
      case "user.updated": {
        if (!data.email_addresses || !data.email_addresses.length) {
          return res
            .status(400)
            .json({ success: false, message: "No email found in user data" });
        }

        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };

        const user = await userModel.findByIdAndUpdate(data.id, userData, {
          new: true,
        });
        console.log("User updated:", user);

        return res.json({ success: true, result: user });
      }
      case "user.deleted": {
        const result = await userModel.findByIdAndDelete(data.id);
        console.log("User deleted:", result);

        return res.json({ success: true, result: "User deleted" });
      }
      default:
        return res.json({ success: true, message: "Event type not handled" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
