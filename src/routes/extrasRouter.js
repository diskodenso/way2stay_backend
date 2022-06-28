import { Router } from "express";
import {
  createNewExtra,
  deleteExtra,
  getAllExtras,
  updateExtra,
} from "../controllers/extrasControllers.js";

// declare router
const extrasRouter = Router();

// get all extras router - see all extras and create a new extra
extrasRouter.route("/").get(getAllExtras).post(createNewExtra).all();

// get single extras router - update single extra and delete single extra
extrasRouter.route("/:extraId").put(updateExtra).delete(deleteExtra).all();

// export extrasRouter
export default extrasRouter;
