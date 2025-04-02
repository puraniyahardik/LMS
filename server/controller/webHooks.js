import { Webhook } from "svix";
import userMedel from "../models/userModel.js";

export const clearWebHooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRE) ;

        await whook.verify(JSON.stringify(req.body),{
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'webhook-signature': req.headers['webhook-signature']
        });

        const {data, type} = req.body;


        switch (type) {
            case 'user.created':{
                const userData = {
                    _id: data.id,
                    email: data.email.address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.imageUrl
                }

                await userMedel.create(userData);
                res.json({})
                break;
            }
            case 'user.updated':{
                const userData = {
                   
                    email: data.email.address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.imageUrl
                }

                await userMedel.findByIdAndUpdate(data.id, userData);
                res.json({})
                break;
            }

            case 'user.deleted':{
                await userMedel.findByIdAndDelete(data.id);
                res.json({})
                break;
            }
                
            
            default:
                break;
        }
        
    } catch (error) {
        res.json({succes: false, message: error.message})
        console.error(error);
        
    }
}