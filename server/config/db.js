import  mongoose from 'mongoose';

//connect to the mongodb function

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("MongoDb Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/LMS`);
}
export default  connectDB;