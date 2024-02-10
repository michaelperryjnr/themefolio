import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect(){
    const conString = process.env.CONNECTION_STRING;
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(conString);
    console.log('Database connected successfully');
    return db;
}

export default connect;