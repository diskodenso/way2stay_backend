import { Router } from "express";

import {
  getAllReviewsByFlatId,
  getAllReviewsByUserId,
  createReview,
  updateReview,
  deleteReview,
  getAllReviews,
} from "../controllers/reviewsController.js";

const reviewsRouter = Router();

// get all reviews route
reviewsRouter.route("/").get(getAllReviews).post(createReview)

// get single reviews, delete and update single reviews Route
reviewsRouter.route("/:reviesId").get(getSingleReview).delete(deleteReview).put(updateReview):
// get All Reviews By FlatId
reviewsRouter.route("/flats/:flatId").get(getAllReviewsByFlatId)

// get All Reviews By userId
reviewsRouter.route("/users/:userId").get(getAllReviewsByUserId);


