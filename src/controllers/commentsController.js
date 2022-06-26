import Comment from "../models/Comment.js";

// --- CREATE NEW Comment CONTROLLER --- //
export const createComment = async (req, res) => {
  try {
    const { userId, bookingId, flatId, comment } = req.body;
    const newComment = await Comment.create({
      userId,
      bookingId,
      flatId,
      comment,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL COMMENTS BY BOOKING ID --- //
export const getAllCommentsByBookingId = async (req, res) => {
  try {
    const allComments = Comment.find();
    res.status(200).json({ comments: allComments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL COMMENTS BY USER ID --- //
export const getAllCommentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const allCommentsByUserId = await Comment.find({ userId: userId });
    res.status(200).json({ comments: allCommentsByUserId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDAtE SINGLE COMMENT --- //
export const updateComments = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { userId, flatId, bookingId, comment } = req.body;
    const commentDetails = {
      userId,
      flatId,
      bookingId,
      comment,
    };
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      commentDetails,
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComments = async (req, res) => {
  try {
    const { commentId } = req.params;
    await Comment.findByIdAndDelete(commentId);
    res.status(200).send("Comment successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL COMMENTS CONTROLLER --- //
export const getAllComments = async (req, res) => {
  try {
      const allComments = await Comment.find();
      res.status(200).json({comment: allComments});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
