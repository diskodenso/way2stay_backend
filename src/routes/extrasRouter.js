import { Router } from "express";
import {
  createNewExtra,
  deleteExtra,
  getAllExtras,
  updateExtra,
} from "../controllers/extrasControllers.js";

const extrasRouter = Router();

extrasRouter.route("/").get(getAllExtras).post(createNewExtra)

extrasRouter.route("/:extraid").put(updateExtra).delete(deleteExtra);

export default extrasRouter;