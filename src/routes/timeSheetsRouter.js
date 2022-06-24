import { Router } from "express";
import {
  createTimeSheet,
  getSingleTimeSheetById,
  getAllTimeSheetsByFlatId,
  updateTimeSheet,
  deleteTimeSheet,
  getAllTimeSheets,
} from "../controllers/timeSheetsController.js";

const timeSheetsRouter = Router();

timeSheetsRouter.route("/").get(getAllTimeSheets)
    .post(createTimeSheet)
    .all();

timeSheetsRouter.route("/flats/:flatId")
    .get(getAllTimeSheetsByFlatId)

timeSheetsRouter.route("/:timeSheetId")
    .get(getSingleTimeSheetById)
    .put(updateTimeSheet)
    .delete(deleteTimeSheet)
    .all();

export default timeSheetsRouter;