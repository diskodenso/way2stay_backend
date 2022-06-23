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

// --- CREATE  REVIEWS BY FLAT ID, BOOKING ID AND USER IDbCONTROLLER --- //
// flatid anhand der booking id
// userid anhand der flatid
export const createReview = async (req, res) => {
  try {
    const { userId, flatId, bookingId, score, text } = req.body;
    const reviewDetails = {
      userId: mongoose.Types.ObjectId(userId),
      flatId: mongoose.Types.ObjectId(flatId),
      bookingId: mongoose.Types.ObjectId(bookingId),
      review: {
        score,
        text,
      },
    };
    const createdReview = await Review.create(reviewDetails);
    res.status(200).json(createdReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY FLAT ID CONTROLLER --- //
export const getAllReviewsByFlatId = async (req, res) => {
  try {
    const { flatId } = req.body;
    const allReviewsByFlatId = await Review.find({ flatId: flatId });
    res.status(200).json(allReviewsByFlatId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY USER ID CONTROLLER --- //
export const getAllReviewsByUserId = async (req, res) => {
  try {
    const { userId } = req.body;
    const allReviewsByUserId = await Review.find({ userId: userId });
    res.status(200).json(allReviewsByUserId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL REVIEWS BY USER ID CONTROLLER --- //
export const getAllReviewsByBookingId = async (req, res) => {
  try {
    const { bookingId } = req.body;
    res.status(200).json(allReviewsByBookingId);
    const allReviewsByBookingId = await Review.find({
      bookingId: bookingId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET SINGLE REVIEW CONTROLLER --- //
export const getSingleReview = async (req, res) => {
  try {
    const { reviewsId } = req.params;
    console.log(reviewsId);
      const singleReview = await Review.findById({ reviewsId:  reviewId});
    console.log(singleReview);
    res.status(200).json(singleReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// --- DELETE SINGLE REVIEW CONTROLLER --- //
export const deleteReview = async (req, res) => {
  try {
    const { revieswId } = req.params;
    await Review.findByIdAndDelete(reviewsId);
    res.status(200).json("Review successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE SINGLE REVIEW CONTROLLER --- //
export const updateReview = async (req, res) => {
  try {
    const { reviewsId } = req.params;
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
      reviewsId,
      reviewDetails,
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
