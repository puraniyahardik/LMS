import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import connectDB  from "./config/db.js";
import { clearWebHooks } from "./controller/webHooks.js";

const app =  express()
const PORT = process.env.PORT | 3000;

//connect db fun
await connectDB();


//
app.use(cors());
app.get("/", (req, res) => {
    res.send("RUnning Port 3000")
});


//clerk parse middle
app.post('/clerk', express.json(), clearWebHooks)

app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`);
})
