// import Router
import { Router } from "express";
// import controllers
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/usersController.js";

// declare userRouter
const usersRouter = Router();
// create a get route to see All Users and a post route to create a new User
usersRouter.route("/").get(getAllUsers).post(createNewUser).all();
// create a get route to see Single User, update Single User and delete a single User
usersRouter
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .all();

// signUp
usersRouter.route("/signup").post(createNewUser); // change to "/".post
// login
usersRouter.route("/login").post(verifyToken, logIn);
// verification
usersRouter.route("/verify").get(verifyToken, verifySession);
// export Router
export default usersRouter;
