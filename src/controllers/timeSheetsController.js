import TimeSheet from "../models/TimeSheet.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;

// --- GET ALL TIMESSHEET CONTROLLER --- //
export const getAllTimeSheets = async (req, res) => {
  try {
    const allTimeSheets = await TimeSheet.find();
    res.status(200).json({timeSheets: allTimeSheets});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET SINGLE TIMESSHEET CONTROLLER --- //
export const getSingleTimeSheetById = async (req, res) => {
  try {
    const { timeSheetId } = req.params;
    const singleTimeSheet = await TimeSheet.findById(timeSheetId);
    res.status(200).json(singleTimeSheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- CREATE TIMESSHEET CONTROLLER --- //
export const createTimeSheet = async (req, res) => {
  try {
    const { flatId, start, end, available } = req.body;
    const newTimeSheet = await TimeSheet.create({
      flatId,
      start,
      end,
      available,
    });
    res.status(201).json({timeSheet: newTimeSheet});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL TIMESSHEETS BY FLATID CONTROLLER --- //
export const getAllTimeSheetsByFlatId = async (req, res) => {
  try {
    const { flatId } = req.params;
    const allTimeSheets = await TimeSheet.find({ flatId: flatId });
    res.status(200).json({timeSheet: allTimeSheets});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE TIMESSHEETS BY ID CONTROLLER --- //
export const updateTimeSheet = async (req, res) => {
  try {
    const { timeSheetId } = req.params;
    const { start, end, available } = req.body;
    const updatedTimeSheet = {
      start,
      end,
      available,
      modifiedAt: new Date(),
    };
    const resUpdatedTimeSheet = await TimeSheet.findByIdAndUpdate(
      timeSheetId,
      updatedTimeSheet,
      { new: true }
    );
    res.status(200).json(resUpdatedTimeSheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE SINGLE TIMESSHEETS CONTROLLER --- //
export const deleteTimeSheet = async (req, res) => {
  try {
    const { timeSheetId } = req.params;
    await TimeSheet.findByIdAndDelete(timeSheetId);
    res.status(200).send("TimeSheet successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
