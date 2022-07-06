import Booking from "../models/Booking.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

// --- GET ALL BOOKINGS CONTROLLER --- //
export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.status(200).json({ bookings: allBookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- CREATE NEW BOOKING CONTROLLER --- //
export const createNewBooking = async (req, res) => {
  try {
    const { flatOneId, flatTwoId, arrival, departure, approved, comments } =
      req.body;
    console.log(req.body);
    const newBooking = await Booking.create(
      {
        flatOneId,
        flatTwoId,
        arrival,
        departure,
        approved,
        comments
      }
    );
    res.status(201).json({ booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: 'Booking NOT successful' });
    console.log(error);
  }
};

// --- GET SINGLE BOOKING BY BOOKINGID CONTROLLER --- //
export const getSingleBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const singleBooking = await Booking.findById(bookingId);
    res.status(200).json({ booking: singleBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL BOOKINGS BY FLATID CONTROLLER --- //
export const getAllBookingsByFlatId = async (req, res) => {
  const { flatId } = req.params;
  try {
    const flatOneBookings = await Booking.find({ flatOneId: flatId });
    const flatTwoBookings = await Booking.find({ flatTwoId: flatId });
    res.status(200).json({
      bookings: {
        flatOne: flatOneBookings,
        flatTwo: flatTwoBookings
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL BOOKINGS BY USERID CONTROLLER --- //
export const getAllBookingsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const userOneBookings = await Booking.find({ userId: userId });
    const userTwoBookings = await Booking.find({ userId: userId });
    res.status(200).json({
      bookings: {
        userOne: userOneBookings,
        userTwo: userTwoBookings
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE SINGLE BOOKING BY BOOKINGID CONTROLLER --- //
export const updateBooking = async (req, res) => {
  const { bookingId } = req.params;
  const { flatOneId, flatTwoId, arrival, departure, approved, comments } =
    req.body;
  try {
    const updatedBooking = {
      flatOneId,
      flatTwoId,
      arrival,
      departure,
      approved,
      comments,
      modifiedAt: new Date(),
    };
    const resUpdatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updatedBooking,
      { new: true }
    );
    res.status(200).json({ booking: resUpdatedBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE SINGLE BOOKING BY BOOKINGID CONTROLLER --- //
export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).send("Booking successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
