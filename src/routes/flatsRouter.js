import { Router } from "express";
import { createNewFlat, deleteSingleFlat, getAllFlats, getSingleFlat, updateSingleFlat } from "../controllers/flatsController.js";
// import {
//   verifySession,
// } from "../controllers/usersController.js";
// import { verifyToken } from "../middlewares/verifyToken.js";
const flatsRouter = Router();

flatsRouter.route("/").get(getAllFlats).post(createNewFlat).all();

flatsRouter
  .route("/:flatId")
  .get(getSingleFlat)
  .put(updateSingleFlat)
  .delete(deleteSingleFlat)
  .all();
export default flatsRouter;

