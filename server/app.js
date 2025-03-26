const  express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app =  express()
const PORT = process.env.PORT;

app.use(cors());
app.get("/", (req, res) => {
    res.send("RUnning Port 3000")
});

app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`);
})