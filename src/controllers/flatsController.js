// import User Model
import Flat from "../models/Flat";
// import bcrypt to encrypt password
// --- GET ALL FLAT CONTROLLER --- //
export const getAllFlats = async (req, res) => {
  try {
    const allFlats = await Flat.find();
    res.status(200).json({ flats: allFlats });
  } catch (error) {
    res.status(500).json(error);
  }
};
// --- GET SINGLE FLAT CONTROLLER --- //
export const getSingleFlat = async (req, res) => {
  try {
    const { id } = req.params;
    const singleFlat = await Flat.findById(id);
    res.status(200).json(singleFlat);
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};
// --- CREATE NEW FLAT CONTROLLER --- //
export const createNewFlat = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};
// --- UPDATE SINGLE FLAT CONTROLLER --- //
export const updateSingleFlat = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// --- DELETE SINGLE FLAT CONTROLLER --- //
export const deleteSingleFlat = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send("Flat successfully deleted");
  }
};
