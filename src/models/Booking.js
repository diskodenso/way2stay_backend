// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema(
  {
    flatOneId: { type: String, ref: "Flat", required: [true, "Flat is required"], },
    flatTwoId: { type: String, ref: "Flat", required: [true, "Flat is required"], },
    arrival: { type: Date, required: true },
    departure: { type: Date, required: true },
    approved: { type: Boolean, required: true, default: false },
    comment: { type: String, required: false, },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  }
);
export default model("Booking", bookingSchema);
