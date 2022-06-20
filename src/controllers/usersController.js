// import User Model
import User from "../models/User.js";
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
    const { id } = req.params;
    const singleUser = await User.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
// --- CREATE NEW USER CONTROLLER --- //
export const createNewUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const newUser = await User.create({ firstname, lastname, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
// --- DELETE EXISTING USER CONTROLLER --- //
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).send("User successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
// --- UPDATE EXISTING USER CONTROLLER --- //
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    birthdate,
    street,
    housenumber,
    postalcode,
    phonenumber,
    email,
  } = req.body;
  const modiefiedUser = await User.findByIdAndUpdate(
    id,
    {
      firstname,
      lastname,
      birthdate,
      street,
      housenumber,
      postalcode,
      phonenumber,
      email,
    },
    { new: true }
  );
};
