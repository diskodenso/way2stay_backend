import { Router } from "express";
import {
  createFlat,
  deleteSingleFlat,
  getAllFlats,
  getSingleFlat,
  updateSingleFlat,
  getAllFlatsByUserId,
} from "../controllers/flatsController.js";

// declare router
const flatsRouter = Router();

// get all Flats Router
flatsRouter.route("/").get(getAllFlats).post(createFlat).all();
// verification

// get single flat router
flatsRouter
  .route("/:flatId")
  .get(getSingleFlat)
  .put(updateSingleFlat)
  .delete(deleteSingleFlat)
  .all();

// get all flats by User Id
flatsRouter.route("/users/:userId").get(getAllFlatsByUserId).all();

// export router
export default flatsRouter;
