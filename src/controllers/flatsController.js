// import User Model
import Flat from "../models/Flat.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";

// --- GET ALL FLAT CONTROLLER --- //
export const getAllFlats = async (req, res) => {
  try {
    const allFlats = await Flat.find();
    res.status(200).json({ flats: allFlats });
  } catch (error) {
    res.status(500).json(error);
  }
};

// --- GET ALL FLATS BY USERID CONTROLLER --- //
export const getAllFlatsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const allFlatsByUserId = await Flat.find({ userId: userId });
    res.status(200).json({ flats: allFlatsByUserId });
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};

// --- GET SINGLE FLAT BY FLATID CONTROLLER --- //
export const getSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    const singleFlat = await Flat.findById(flatId);
    res.status(200).json({ flat: singleFlat });
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};

// --- CREATE NEW FLAT CONTROLLER --- //
export const createFlat = async (req, res) => {
  try {
    const { isActive, userId, title, description, maxPersons, size, bedroom, bathroom, floor, extras, pets, kids,
      categories, street, housenumber, postalcode, city, lat, lang, images } = req.body;
    // console.log(req.body);
    const flatDetails = {
      userId, isActive, title, description, details: {
        maxPersons, size, bedroom, bathroom, floor, extras, pets, kids, categories,
      },
      location: {
        street, housenumber, postalcode, city,
      },
      coordinates: {
        lat, lang,
      },
      images,
    };
    if (userId) {
      const createdFlat = await Flat.create(flatDetails);
      res.status(201).json({ flat: createdFlat });
    } else {
      res.status(401).send("Please create an account before a flat");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE FLAT BY FLATID CONTROLLER --- //
export const updateSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    const {
      isActive, title, description, maxPersons, size, bedroom, bathroom, floor, extras, pets,
      kids, categories, street, housenumber, postalcode, city, lat, lang, images,
    } = req.body;
    const updatedFlat = {
      isActive, title, description, details: {
        maxPersons, size, bedroom, bathroom, floor, extras, pets, kids, categories,
      },
      location: {
        street, housenumber, postalcode, city,
      },
      coordinates: {
        lat, lang,
      },
      images,
    };
    console.log(req.body);
    const updatedSingleFlat = await Flat.findByIdAndUpdate(
      flatId,
      updatedFlat,
      {
        new: true,
      }
    );
    res.status(200).json(updatedSingleFlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE SINGLE FLAT CONTROLLER --- //
export const deleteSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    await Flat.findByIdAndDelete(flatId);
    res.status(200).send("Flat successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
