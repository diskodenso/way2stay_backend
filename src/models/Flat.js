// import mongoose
import mongoose from "mongoose";
import User from "./User.js";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const flatSchema = new Schema({
  userId: { type: String, ref: "User", required: true },
  // userId: { type: ObjectId },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: {
    maxpersons: { type: Number, required: false },
    size: { type: Number, required: false },
    bedroom: { type: Number, required: false },
    bathroom: { type: Number, required: false },
    floor: { type: Number, required: false },
    extras: [
      {
        type: String,
        ref: "Extra",
        required: false,
      },
    ],
    pets: { type: Boolean, required: false, default: false },
    kids: { type: Boolean, required: false, default: false },
    categories: [
      {
        type: String,
        ref: "Category",
        required: [false, "Category is not required"],
      },
    ],
  },
  location: {
    street: { type: String, required: false },
    housenumber: { type: String, required: false },
    postalcode: { type: Number, required: false },
    city: { type: String, required: false },
  },
  coordinates: {
    lat: { type: Number, required: false },
    lang: { type: Number, required: false },
  },
  images: { type: Array, default: null },
  isActive: { type: Boolean, required: false, default: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Flat", flatSchema);
