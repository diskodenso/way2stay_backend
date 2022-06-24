// import mongoose
import mongoose from "mongoose";
// deconstruct Schema and Model
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is mandatory"],
    unique: [true, "Username must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  contact: {
    email: {
      type: String,
      required: true,
      unique: [true, "email must be unique"],
    },
    phonenumber: {
      type: String,
      required: false,
    },
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  birthdate: {
    type: Date,
    required: false,
  },
  address: {
    street: {
      type: String,
      required: false,
    },
    housenumber: {
      type: Number,
      required: false,
    },
    postalcode: {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
  },
  favorites: [
    {
      type: String,
      required: false,
      unique: true,
    },
  ],
  // cloudiary just needs URL so thats enough
  profilePicUrl: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    defaut: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("User", userSchema);
