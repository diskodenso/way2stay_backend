// import User Model
import Flat from "../models/Flat";

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
    const { flatId } = req.params;
    const singleFlat = await Flat.findById(flatId);
    res.status(200).json(singleFlat);
  } catch (error) {
    res.status(500).json({ erorr: error.message });
  }
};
// --- CREATE NEW FLAT CONTROLLER --- //
export const createNewFlat = async (req, res) => {
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
    } = req.body;
    const flatDetails = {
      userId,
      isActive,
      title,
      description,
      details: {
        maxPersons,
        size,
        bedroom,
        bathroom,
        floor,
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
      },
    };
    const updatedFlat = await Flat.create(flatDetails, { new: true });
    res.status(201).json(updatedFlat);
  } catch (error) {
    res.status(500).json({ erorr: error.message });
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
    const resUpdatedFlat = await Flat.findByIdAndUpdate(flatId, updatedFlat, {
      new: true,
    });
    res.status(200).json(resUpdatedFlat);
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
    res.status(500).json(error);
  }
};
