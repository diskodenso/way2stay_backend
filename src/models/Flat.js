// import mongoose
import mongoose from "mongoose";
import User from "./User.js";
// deconstruct Schema and Model
const { Schema, model, ObjectId } = mongoose;

const flatSchema = new Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // userId: { type: ObjectId },
  title: { type: String, required: false },
  description: { type: String, required: false },
  details: {
    maxPersons: { type: Number, required: false },
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
        type: ObjectId,
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
  images: [
    {
      imagetitle: { type: String, required: false },
      imagedescription: { type: Number, required: false },
      imageurl: { type: String, required: false },
    },
  ],
  isActive: { type: Boolean, required: false, default: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Flat", flatSchema);
