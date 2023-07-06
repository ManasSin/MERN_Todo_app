import jwt from "jsonwebtoken";
import User from "../Modals/userModal.js";

export const requireAuth = async (req, res, next) => {
  // here we check if the user exists is authorised or not.

  // by checking the authorization token, if it verify or not

  const { authorization } = req.headers;

  //   console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ error: "authorization token required" });
  }

  // now we extract the token from auth.
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    // now get the id from userModel and store it for sending it to next()
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized request" });
  }
};
