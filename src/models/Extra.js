// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model, ObjectId } = mongoose;

const extraSchema = new Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Extra", extraSchema);

    // "_id": 5,
    // "name": "Balcony",
    // "description": "This extra describes that your flat has a balcony",
    // "createdAt": "2022-06-17",
    // "modifiedAt": "2022-06-17"