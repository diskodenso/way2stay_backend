// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  // refer to flats - each review needs to be connected to a booking
  userId: {
    type: String,
    required: [true, "UserId is mandatory"],
  },
  flatId: {
    type: String,
    ref: "Flat",
    required: [true, "FlatId is mandatory"],
  },
  bookingId: {
    type: String,
    required: [true, "BookingId is mandatory"],
  },
  comment: {
    score: { type: Number, required: true },
    body: { type: String, trim: true, required: true },
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
