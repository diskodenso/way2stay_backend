// import User Model
import User from "../models/User.js";
// import bcrypt to encrypt password
// import jwt
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
// each controller needs to be exported seperately

// --- ALL USERS CONTROLLER --- //
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(500).json(error);
  }
};

// --- SINGLE USER CONTROLLER --- //
export const getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const singleUser = await User.findById(userId);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// --- CREATE NEW USER CONTROLLER --- //
export const createUser = async (req, res) => {
  try {
    const { isActive, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      isActive,
      contact: {
        email,
      },
      username,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email }, // payload
      process.env.JWT_SECRET, // jwt secret
      { expiresIn: "1h" } // options
    );
    if (token && newUser) {
      res
        .status(201)
        .set("authorization", token)
        .send("User successfully created");
      console.log(res.headers.authorization);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE EXISTING USER CONTROLLER --- //
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(200).send("User successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// --- UPDATE EXISTING USER CONTROLLER --- //
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const {
    username,
    password,
    firstname,
    lastname,
    birthdate,
    street,
    housenumber,
    postalcode,
    phonenumber,
    email,
    isActive,
  } = req.body;
  try {
    const updatedUser = {
      username,
      password,
      contact: {
        phonenumber,
        email,
      },
      firstname,
      lastname,
      birthdate,
      address: {
        street,
        housenumber,
        postalcode,
      },
      isActive,
    };
    const resUpdatedUser = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    res.status(200).json(resUpdatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// --- LOGIN CONTROLLER --- //
export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find user and check if registered - use findOne (mongo method) method and search by email and select the password to check
    const findUser = await User.findOne({ email }).select("+password");
    // check if password is correct with bcrypt compare method
    const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { email: findUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .set("authorization", token)
        .send("User successfully logged in");
      console.log(res);
    } else {
      res.status(401).send("Please create an account to log in");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// --- VERIFY SESSION CONTROLLER --- //
export const verifySession = async (req, res) => {
  res.status(200).send("Token successfully verified");
};
