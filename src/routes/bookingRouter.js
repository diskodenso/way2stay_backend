import { Router } from "express";
import {
  createNewBooking,
  deleteBooking,
  getAllBookingsByUserId,
  getAllBookingsByFlatId,
  getSingleBooking,
  updateBooking,
} from "../controllers/bookingControllers.js";

const bookingRouter = Router();

bookingRouter.route("/").post(createNewBooking);

bookingRouter.route("/user/:userid").get(getAllBookingsByUserId);

bookingRouter.route("/flat/:flatid").get(getAllBookingsByFlatId);

bookingRouter.route("/:bookingid").get(getSingleBooking).put(updateBooking).delete(deleteBooking);

export default bookingRouter;