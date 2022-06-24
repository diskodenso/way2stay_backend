// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  flats: [
    {
      flatOneId: {
        type: String,
        ref: "Flat",
        required: [true, "Flat is required"],
        unique: [true, "Flat is required"],
      },
      flatTwoId: {
        type: String,
        ref: "Flat",
        required: [true, "Flat is required"],
        unique: [true, "Flat is required"],
      },
    },
  ],
  arrival: { type: Date, required: true },
  departure: { type: Date, required: true },
  approved: { type: Boolean, required: true },
  comment: {
    type: String,
    required: [false, "Comment is mandatory"],
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Booking", bookingSchema);
