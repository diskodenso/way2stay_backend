import { Router } from "express";
import {
  createComment,
  deleteComments,
  getAllCommentsByFlatId,
  getAllCommentsByUserId,
  updateComments,
  getAllComments,
} from "../controllers/commentsController.js";

// declare router
const commentsRouter = Router();

// create route to get all comments and to create a comment
commentsRouter.route("/").get(getAllComments).post(createComment).all();

// get all comments by UserId router - all comments by userId
commentsRouter.route("/user/:userId").get(getAllCommentsByUserId).all();

// get all comments by FlatId router - all comments by FlatId
commentsRouter.route("/flats/:flatId").get(getAllCommentsByFlatId).all();

// get single comment by CommentId router - all comments by CommentId, update & delete single comment
commentsRouter
  .route("/:commentId")
  .put(updateComments)
  .delete(deleteComments)
  .all();

// export commentsRouter
export default commentsRouter;
