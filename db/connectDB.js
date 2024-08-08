import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDb : ${conn.connection.host}`);
    } catch (error) {
        console.log("Error while connecting : ",error.message);
        process.exit(1);
    }
}