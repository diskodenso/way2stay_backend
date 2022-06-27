// import User Model
import Review from "../models/Review.js";
// import mongoose
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

// --- GET ALL REVIEWS CONTROLLER --- //
export const getAllReviews = async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.status(200).json({ reviews: allReviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- CREATE REVIEW CONTROLLER --- //
// flatid anhand der booking id
// userid anhand der flatid - refactor - createReviewByBookingId
export const createReview = async (req, res) => {
  try {
    const { userId, flatId, bookingId, score, text } = req.body;
    console.log(req.body);
    const reviewDetails = {
      userId,
      flatId,
      bookingId,
      review: {
        score,
        text,
      },
    };
    if (bookingId) {
      const createdReview = await Review.create(reviewDetails);
      res.status(200).json({ review: createdReview });
    } else {
      res.status(500).send("There is no booking to write an review on");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY FLAT ID CONTROLLER --- //
export const getAllReviewsByFlatId = async (req, res) => {
  try {
    const { flatId } = req.params;
    console.log(req.params);
    const allReviewsByFlatId = await Review.find({ flatId: flatId });
    res.status(200).json({ reviews: allReviewsByFlatId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY USER ID CONTROLLER --- //
export const getAllReviewsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const allReviewsByUserId = await Review.find({ userId: userId });
    res.status(200).json({ reviews: allReviewsByUserId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY BOOKING ID CONTROLLER --- //
export const getAllReviewsByBookingId = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const allReviewsByBookingId = await Review.find({
      bookingId: bookingId,
    });
    console.log(allReviewsByBookingId);
    res.status(200).json({ reviews: allReviewsByBookingId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET SINGLE REVIEW BY REVIEWID CONTROLLER--- //
export const getSingleReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    console.log(reviewId);
    const singleReview = await Review.findById(reviewId);
    console.log(singleReview);
    res.status(200).json({ review: singleReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE SINGLE REVIEW CONTROLLER --- //
export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    res.status(200).json("Review successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE SINGLE REVIEW CONTROLLER --- //
export const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { userId, flatId, bookingId, score, text } = req.body;
    const reviewDetails = {
      userId,
      flatId,
      bookingId,
      review: {
        score,
        text,
      },
    };
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      reviewDetails,
      { new: true }
    );
    res.status(200).json({ review: updatedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
