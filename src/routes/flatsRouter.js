import { Router } from "express";
import { createFlat, deleteSingleFlat, getAllFlats, getSingleFlat, updateSingleFlat, getAllFlatsByUserId } from "../controllers/flatsController.js";
// import {
//   verifySession,
// } from "../controllers/usersController.js";
// import { verifyToken } from "../middlewares/verifyToken.js";
const flatsRouter = Router();

flatsRouter.route("/").get(getAllFlats).post(createFlat).all();

flatsRouter
  .route("/:flatId")
  .get(getSingleFlat)
  .put(updateSingleFlat)
  .delete(deleteSingleFlat)
  .all();

flatsRouter.route("/:userId").get(getAllFlatsByUserId).all();
export default flatsRouter;

