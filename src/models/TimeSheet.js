// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model, ObjectId } = mongoose;

const timeSheetSchema = new Schema({
  flat: { type: ObjectId, ref: "Flat", required: [true, "Flat is required"] },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  available: Boolean,
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

export default model("TimeSheet", timeSheetSchema);
