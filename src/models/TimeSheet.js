// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const timeSheetSchema = new Schema({
  flatId: { type: String, ref: "Flat", required: [true, "Flat is required"] },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  available: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

export default model("TimeSheet", timeSheetSchema);
