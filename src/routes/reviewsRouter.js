import { Router } from "express";
// import controllers
import {
  getAllReviewsByFlatId,
  getAllReviewsByUserId,
  getAllReviewsByBookingId,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
  getAllReviews,
} from "../controllers/reviewsController.js";
import { verifySession } from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// declare Router
const reviewsRouter = Router();

// get all reviews route
reviewsRouter.route("/").get(getAllReviews).post(createReview);

// verification
reviewsRouter.route("/verify").get(verifyToken, verifySession);

// get single reviews, delete and update single reviews Route
reviewsRouter
  .route("/:reviewsId")
  .get(getSingleReview)
  .delete(deleteReview)
  .put(updateReview);
// get All Reviews By FlatId
reviewsRouter.route("/flats/:flatId").get(getAllReviewsByFlatId);

// get All Reviews By userId
reviewsRouter.route("/users/:userId").get(getAllReviewsByUserId);

// get All Reviews By bookingId
reviewsRouter.route("/booking/:bookingId").get(getAllReviewsByBookingId);

export default reviewsRouter;
