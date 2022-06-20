// import Router
import { Router } from "express";
// import controllers
import {
  createNewUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from "../controllers/usersController.js";

// declare userRouter
const usersRouter = Router();
// create a get route to see All Users and a post route to create a new User
usersRouter.route("/").get(getAllUsers).post(createNewUser);
// create a get route to see Single User, update Single User and delete a single User
usersRouter
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteSingleUser)
  .put(updateSingleUser);
// export Router
export default usersRouter;
