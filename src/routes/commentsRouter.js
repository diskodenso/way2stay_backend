import { Router } from 'express';
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
commentsRouter
    .route('/').get(getAllComments)
    .post(createComment)
    .all();

// get 
commentsRouter
    .route('/user/:userId')
    .get(getAllCommentsByUserId)
    .all();
    
commentsRouter
    .route('/flats/:flatId')
    .get(getAllCommentsByFlatId)
    .all();

commentsRouter
    .route('/:commentId')
    .put(updateComments)
    .delete(deleteComments)
    .all();

export default commentsRouter;