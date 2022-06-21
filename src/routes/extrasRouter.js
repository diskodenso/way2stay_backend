import { Router } from "express";
import {
  createNewExtra,
  deleteExtra,
  getAllExtras,
  updateExtra,
} from "../controllers/extrasControllers.js";

const extrasRouter = Router();

extrasRouter.route("/")
  .get(getAllExtras)
  .post(createNewExtra)
  .all();

extrasRouter.route("/:extraId")
  .put(updateExtra)
  .delete(deleteExtra)
  .all();

export default extrasRouter;