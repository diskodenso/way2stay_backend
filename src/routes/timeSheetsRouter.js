import { Router } from "express";
import {
    createTimeSheet,
    getSingleTimeSheetById,
    getAllTimeSheetsByFlatId,
    updateTimeSheet,
    deleteTimeSheet,
  } from "../controllers/timeSheetsController.js";

const timeSheetsRouter = Router();

timeSheetsRouter.route("/")
    .get(getAllTimeSheetsByFlatId)
    .post(createTimeSheet)
    .all();

timeSheetsRouter.route("/:timeSheetId")
    .get(getSingleTimeSheetById)
    .put(updateTimeSheet)
    .delete(deleteTimeSheet)
    .all();

export default timeSheetsRouter;