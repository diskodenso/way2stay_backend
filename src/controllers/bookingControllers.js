import Booking from "../models/Booking.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

export const createNewBooking = async (req, res) => {
  try {
    const { flatOneId, flatTwoId, arrival, departure, approved, comments } =
      req.body;
    const newBooking = await Booking.create({
      flatOneId,
      flatTwoId,
      arrival,
      departure,
      approved,
      comments,
      createdAt: new Date(),
    });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const singleBooking = await Booking.findById(bookingId);
    res.status(200).json(singleBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBookingsByFlatId = async (req, res) => {
  const { flatId } = req.params;
  try {
    const allBookings = await Booking.find({ flatId: flatId });
    res.status(200).json({ bookings: allBookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBookingsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const allBookings = await Booking.find({ userId: userId });
    res.status(200).json({ bookings: allBookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    res.status(200).json(resUpdatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).send("Booking successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL BOOKINGS CONTROLLER --- //
export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.status(200).json({ bookings: allBookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
