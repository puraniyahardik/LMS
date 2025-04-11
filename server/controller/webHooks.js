import { Webhook } from "svix";
import userModel from "../models/userModel.js";

export const clearWebHooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

       let verify =  await whook.verify(JSON.stringify(req.body),{
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'webhook-signature': req.headers['webhook-signature']
        });
        console.log(verify);
        
        const {data, type} = req.body;
console.log(data, type);

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email.address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.imageUrl
                }

                let res = await userModel.create(userData);
                console.log(res);
                
                res.json({success: true, result: res})
                break;
            }
            case 'user.updated': {
                const userData = {
                   
                    email: data.email.address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.imageUrl
                }

                await userModel.findByIdAndUpdate(data.id, userData);
                res.json({})
                break;
            }

            case 'user.deleted': {
                await userModel.findByIdAndDelete(data.id);
                res.json({})
                break;
            }
                
            
            default:
                break;
        }
        
    } catch (error) {
        res.json({success: false, message: error.message})
        console.error(error);
        
    }
}