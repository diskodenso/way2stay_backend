import Extra from "../models/Extra.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

// --- CREATE NEW EXTRA CONTROLLER --- //
export const createNewExtra = async (req, res) => {
  try {
    const { name } = req.body;
    const newExtra = await Extra.create({
      name,
    });
    res.status(201).json(newExtra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL EXTRAS CONTROLLER --- //
export const getAllExtras = async (req, res) => {
  try {
    const allExtras = await Extra.find();
    res.status(200).json({ extras: allExtras });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE EXTRA BY EXTRAID CONTROLLER --- //
export const updateExtra = async (req, res) => {
  const { extraId } = req.params;
  const { name } = req.body;
  try {
    const updatedExtra = {
      name,
      modifiedAt: new Date(),
    };
    const resUpdatedExtra = await Extra.findByIdAndUpdate(
      extraId,
      updatedExtra,
      { new: true }
    );
    res.status(200).json({ extra: resUpdatedExtra });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE EXTRA CONTROLLER --- //
export const deleteExtra = async (req, res) => {
  try {
    const { extraId } = req.params;
    await Extra.findByIdAndDelete(extraId);
    res.status(200).send("Extra successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
