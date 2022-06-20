// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categories: [{
        city: false,
        lake: false,
        suburbs: false,
        rural: false,
        moutains: false,
        skiing: false,
    }],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});
export default model("Category", categorySchema);
