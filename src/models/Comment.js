import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    userId: {
        type: String,
        ref: "User",
        required: [true, "UserId is mandatory"]
    },
    bookingId: {
        type: String,
        ref: "Booking",
        required: [true, "BookingId is mandatory"],
    },
    flatId: {
        type: String,
        ref: "Flat",
        required: [true, "FlatId is mandatory"]
    },
    comment: {
        type: String,
        required: [true, "Comment is mandatory"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
});

export default model("Comment", commentSchema);
