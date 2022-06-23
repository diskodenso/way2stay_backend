// import User Model
import Flat from "../models/Flat.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

// --- GET ALL FLAT CONTROLLER --- //
export const getAllFlats = async (req, res) => {
  try {
    const allFlats = await Flat.find();
    res.status(200).json({ flats: allFlats });
  } catch (error) {
    res.status(500).json(error);
  }
};
// --- GET ALL FLATS CONTROLLER --- //
export const getAllFlatsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const getAllFlatsByUserId = await Flat.findById(userId);
    res.status(200).json(getAllFlatsByUserId);
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};

// --- GET SINGLE FLAT CONTROLLER --- //
export const getSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    const singleFlat = await Flat.findById(flatId);
    res.status(200).json(singleFlat);
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};
// --- CREATE NEW FLAT CONTROLLER --- //
export const createFlat = async (req, res) => {
  try {
    const {
      isActive,
      userId,
      title,
      description,
      maxPersons,
      size,
      bedroom,
      bathroom,
      floor,
      extras,
      pets,
      kids,
      street,
      housenumber,
      postalcode,
      city,
      lat,
      lang,
      imagetitle,
      imagedescription,
      imageurl,
    } = req.body;
   // console.log(req.body);
    const flatDetails = {
      userId: mongoose.Types.ObjectId(userId),
      isActive,
      title,
      description,
      details: {
        maxPersons,
        size,
        bedroom,
        bathroom,
        floor,
        extras,
        pets,
        kids,
      },
      location: {
        street,
        housenumber,
        postalcode,
        city,
      },
      coordinates: {
        lat,
        lang,
      },
      image: {
        imagetitle,
        imagedescription,
        imageurl,
      },
    };
    const updatedFlat = await Flat.create(flatDetails, { new: true });
    res.status(201).json(updatedFlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE FLAT CONTROLLER --- //
export const updateSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    const {
      isActive,
      title,
      description,
      maxPersons,
      size,
      bedroom,
      bathroom,
      floor,
      extrasId,
      pets,
      kids,
      street,
      housenumber,
      postalcode,
      city,
      lat,
      lang,
      imagetitle,
      imagedescription,
    } = req.body;
    const updatedFlat = {
      title,
      description,
      maxPersons,
      size,
      bedroom,
      bathroom,
      floor,
      extrasId,
      pets,
      kids,
      street,
      housenumber,
      postalcode,
      city,
      lat,
      lang,
      imagetitle,
      imagedescription,
    };
    const updateSingleFlat = await Flat.findByIdAndUpdate(flatId, updatedFlat, {
      new: true,
    });
    res.status(200).json(updatedFlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// --- DELETE SINGLE FLAT CONTROLLER --- //
export const deleteSingleFlat = async (req, res) => {
  try {
    const { flatId } = req.params;
    await Flat.findByIdAndDelete(flatId);
    res.status(200).send("User successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
