import { Router } from "express";
import {
  createNewBooking,
  deleteBooking,
  getAllBookings,
  getAllBookingsByUserId,
  getAllBookingsByFlatId,
  getSingleBookingById,
  updateBooking,
} from "../controllers/bookingControllers.js";

// declare bookings Router
const bookingsRouter = Router();

// get all bookings - see all bookings, create new booking
bookingsRouter.route("/").get(getAllBookings).post(createNewBooking).all();

// get all bookings by userId - see all bookings of specific user by userId
bookingsRouter.route("/users/:userId").get(getAllBookingsByUserId).all();

// get all bookings by flatId - see all bookings of specific flat by flatId
bookingsRouter.route("/flats/:flatId").get(getAllBookingsByFlatId).all();

// get single booking - see single booking by bookingId, update & delete single booking
bookingsRouter
  .route("/:bookingId")
  .get(getSingleBookingById)
  .put(updateBooking)
  .delete(deleteBooking)
  .all();

export default bookingsRouter;
