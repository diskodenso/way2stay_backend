// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: false },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  contact: [
    {
      email: { type: String, required: true },
      phonenumber: { type: Number, required: false },
    },
  ],
  firstname: { type: String, required: true },
  lastname: { type: String, required: false },
  address: [
    {
      street: { type: String, required: false },
      housenumber: { type: Number, required: false },
      postalCode: { type: Number, required: false },
      city: { type: String, required: false },
    },
    ],
  // cloudiary just needs URL so thats enough
  profilePicUrl: { type: String, required: false },
  isActive: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
