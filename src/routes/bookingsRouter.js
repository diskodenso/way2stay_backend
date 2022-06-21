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

bookingsRouter.route("/")
  .post(createNewBooking)
  .all();

bookingsRouter.route("/user/:userId")
  .get(getAllBookingsByUserId)
  .all();

bookingsRouter.route("/flat/:flatId")
  .get(getAllBookingsByFlatId)
  .all();

bookingsRouter.route("/:bookingId")
  .get(getSingleBookingById)
  .put(updateBooking)
  .delete(deleteBooking)
  .all();

export default bookingsRouter;