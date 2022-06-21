import Comment from '../models/Comment.js'

/*
{
    "_id": 1,
    "userId": 1,
    "bookingId": 2,
    "stars": 4,
    "comment": "Was für eine geile Wohnung",
    "createdAt": "2022-06-17",
    "modifiedAt": "2022-06-17"
}
*/


// --- CREATE NEW Comment CONTROLLER --- //
export const createComment = async (req, res) => {
    try {
        const { bookingId, flatId, comment } = req.body;
        const newComment = await Comment.create(
            {
                comment,
                bookingId,
                flatId
            }
            );
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json(error);
        }
    };
    
    
// --- CREATE NEW Comment CONTROLLER --- //
export const getAllCommentsByBookingId = async (req, res) => {
    try {
        const allComments = Comment.find();
        res.status(200).json({ comments: allComments });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllCommentsByUserId = async (req, res) => {

}

export const updateComments = async (req, res) => {

}

export const deleteComments = async (req, res) => {

}