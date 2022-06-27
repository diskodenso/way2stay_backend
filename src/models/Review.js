// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  // refer to flats - each review needs to be connected to a booking
  userId: { type: String, ref: "User", required: true },
  flatId: { type: String, ref: "Flat", required: true },
  bookingId: { type: String, ref: "Booking", required: true },
  review: {
    score: { type: Number, required: true },
    text: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
});
export default model("Review", reviewSchema);
