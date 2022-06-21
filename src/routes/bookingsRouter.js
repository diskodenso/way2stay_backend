import { Router } from "express";
import {
  createNewBooking,
  deleteBooking,
  getAllBookingsByUserId,
  getAllBookingsByFlatId,
  getSingleBookingById,
  updateBooking,
} from "../controllers/bookingControllers.js";

const bookingsRouter = Router();

bookingsRouter.route("/").post(createNewBooking);

bookingsRouter.route("/user/:userId").get(getAllBookingsByUserId);

bookingsRouter.route("/flat/:flatId").get(getAllBookingsByFlatId);

bookingsRouter.route("/:bookingId").get(getSingleBookingById).put(updateBooking).delete(deleteBooking);

export default bookingsRouter;