// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model, ObjectId } = mongoose;

const flatSchema = new Schema({
  user: { type: ObjectId, ref: "User", required: [true, "User is required"] },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: {
    maxPersons: { type: Number, required: false },
    size: { type: Number, required: false },
    bedroom: { type: Number, required: false },
    bathroom: { type: Number, required: false },
    floor: { type: Number, required: false },
    extras: {
      type: ObjectId,
      ref: "Extra",
      required: false,
    },
    pets: { type: Boolean, required: false },
    kids: { type: Boolean, default: false },
    categories: {
      type: ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
  },
  location: {
    street: { type: String, required: true },
    housenumber: { type: Number, required: true },
    postalcode: { type: Number, required: true },
    city: { type: String, required: true },
  },
  coordinates: {
    lat: { type: Number, required: false },
    lang: { type: Number, required: false },
  },
  images: {
    imagetitle: { type: String, required: true },
    imagedescription: { type: Number, required: true },
  },
  isActive: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Flat", flatSchema);
