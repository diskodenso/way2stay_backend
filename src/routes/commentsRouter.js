import { Router } from 'express';
import { createComment, deleteComments, getAllCommentsByBookingId, getAllCommentsByUserId, updateComments } from '../controllers/commentsController.js';

const commentsRouter = Router();

commentsRouter
    .route('/')
    .post(createComment)
    .all();

commentsRouter
    .route('/user/:userId')
    .get(getAllCommentsByUserId)
    .all();
    
commentsRouter
    .route('/booking/:bookingId')
    .get(getAllCommentsByBookingId)
    .all();

commentsRouter
    .route('/:commentId')
    .put(updateComments)
    .delete(deleteComments)
    .all();

export default commentsRouter;