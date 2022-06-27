// import Router
import { Router } from "express";
// import controllers
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  logIn,
  updateUser,
  verifySession,
} from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// declare userRouter
const usersRouter = Router();

// create a get route to see All Users and a post route to create a new User
usersRouter.route("/").get(getAllUsers).all();

// signUp Route - post request
usersRouter.route("/signup").post(createUser); // change to "/".post

// login Route - post request
usersRouter.route("/login").post(logIn);

// verification route
usersRouter.route("/verify").get(verifyToken, verifySession);

// create a get route to see Single User, update Single User and delete a single User
usersRouter
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .all();

// export Router
export default usersRouter;
