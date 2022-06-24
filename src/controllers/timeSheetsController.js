import TimeSheet from "../models/TimeSheet.js";
import mongoose from "mongoose";
// import object ID from mongoose
import pkg from "mongoose";
const { ObjectId } = pkg;
export const createTimeSheet = async (req, res) => {
  try {
    const { flatId, start, end, available } = req.body;
    const newTimeSheet = await TimeSheet.create({
      flatId,
      start,
      end,
      available,
    });
    res.status(201).json(newTimeSheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleTimeSheetById = async (req, res) => {
  try {
    const { timeSheetId } = req.params;
    const singleTimeSheet = await TimeSheet.findById(timeSheetId);
    res.status(200).json(singleTimeSheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTimeSheetsByFlatId = async (req, res) => {
  const { flatId } = req.params;
  try {
    const allTimeSheets = await TimeSheet.find({ flatId: flatId });
    res.status(200).json(allTimeSheets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTimeSheet = async (req, res) => {
  const { timeSheetId } = req.params;
  const { start, end, available } = req.body;
  try {
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

export const deleteTimeSheet = async (req, res) => {
  try {
    const { timeSheetId } = req.params;
    await TimeSheet.findByIdAndDelete(timeSheetId);
    res.status(200).send("TimeSheet successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL TIMESSHEET CONTROLLER --- //
export const getAllTimeSheets = async (req, res) => {
  try {
    const allTimeSheets = await TimeSheet.find();
    res.status(200).json(allTimeSheets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
