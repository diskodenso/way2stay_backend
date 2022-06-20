// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  items: [
    {
      flat: {
        type: ObjectId,
        ref: "Flat",
        required: [true, "Flat is required"],
      },
      approved: Boolean,
      comments: {
        type: ObjectId,
        ref: "Review",
        required: [false, "Review is not required"],
      },
      createdAt: { type: Date, default: Date.now },
      modifiedAt: { type: Date, default: Date.now },
    },
  ],
});
export default model("Booking", bookingSchema);
