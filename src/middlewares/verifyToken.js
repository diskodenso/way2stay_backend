// import jwt
import jwt from "jsonwebtoken";

// create verify token variable
export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      req.status(401).json("You are not authorized");
    } else {
      // use jwt verify method to check if verified
      const isEmailBelongsToToken = jwt.verify(token, process.env.JWT_SECRET);
        if (isEmailBelongsToToken) {
          // we need to create a new property 
        req.user = isEmailBelongsToToken;
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
