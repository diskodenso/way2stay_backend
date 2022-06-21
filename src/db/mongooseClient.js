import { MongoClient, ObjectId } from "mongodb";

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

try {
    await mongoose.connect(uri);
    console.log("MongoDB connection established");
} catch (error) {
    console.log("MongoDB connection NOT established");
    console.log(error);
}
