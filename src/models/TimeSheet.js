// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model, ObjectId } = mongoose;

const timeSheetSchema = new Schema({
  flatId: { type: ObjectId, ref: "Flat", required: [true, "Flat is required"] },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  available: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

export default model("TimeSheet", timeSheetSchema);
