import { Router } from "express";
import {
  createTimeSheet,
  getSingleTimeSheetById,
  getAllTimeSheetsByFlatId,
  updateTimeSheet,
  deleteTimeSheet,
  getAllTimeSheets,
} from "../controllers/timeSheetsController.js";

// declare router
const timeSheetsRouter = Router();

// get all timesheets route
timeSheetsRouter.route("/").get(getAllTimeSheets).post(createTimeSheet).all();

// get all timesheets by flatId route
timeSheetsRouter.route("/flats/:flatId").get(getAllTimeSheetsByFlatId);

// get all timesheets by timeSheetId route
timeSheetsRouter
  .route("/:timeSheetId")
  .get(getSingleTimeSheetById)
  .put(updateTimeSheet)
  .delete(deleteTimeSheet)
  .all();

// export router
export default timeSheetsRouter;
