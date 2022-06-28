// import jwt
import jwt from "jsonwebtoken";
// create verify token variable

export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log(req.headers);
    if (!token) {
      res.status(401).json("Unauthorized"); //Nicht zu viele Infos über den Grund geben
    } else {
      //.verify() returnt den payload, der zum Erstellen des tokens benutzt wurde (email in unserem Fall)
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(emailBelongingToToken);
      if (decodedToken) {
        req.decodedToken = decodedToken;
        console.log(decodedToken);
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
