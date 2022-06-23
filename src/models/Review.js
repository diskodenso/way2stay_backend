// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  // refer to flats - each review needs to be connected to a booking
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  flatId: [{ type: Schema.Types.ObjectId, ref: "Flat" }],
  bookingId: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  review: {
    score: { type: Number, required: true },
    text: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
});
export default model("Review", reviewSchema);

//  "userId": 1,
//     "bookingId": 2,
//     "stars": 4,
//     "comment": "Was für eine geile Wohnung",
//     "createdAt": "2022-06-17",
//     "modifiedAt": "2022-06-17"
// const commentSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   // each comment can only relates to one blog, so it's not in array
//   post: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post",
//   },
// });

// module.exports = mongoose.model("Comment", commentSchema);
