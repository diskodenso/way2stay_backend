import { Router } from "express";
import { createNewFlat, deleteSingleFlat, getAllFlats, getSingleFlat, updateSingleFlat } from "../controllers/flatsController.js";
import {
  verifySession,
} from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const flatsRouter = Router();

flatsRouter.route("/").get(getAllFlats).post(verifyToken, createNewFlat).all();

flatsRouter
  .route("/:flatId")
  .get(getSingleFlat)
  .put(verifyToken, updateSingleFlat)
  .delete(verifyToken, deleteSingleFlat)
  .all();
export default flatsRouter;

