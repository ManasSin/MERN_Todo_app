import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    // user data schema
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  })
);

export default User;
