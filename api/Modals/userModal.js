import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// making a static method to sign up
userSchema.statics.signup = async function (email, password) {
  // validator
  if (!email || !password) throw Error("All fields must be filled");

  if (!validator.isEmail(email)) throw Error("Email is not valid");
  if (!validator.isStrongPassword(password))
    throw Error("Password not Strong Enough");

  // check if email exists or duplicate
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("email already in use");
  }

  // hash password
  // ? salt complex algo resulted from number of roundes the algo run
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPass });
  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Password did not match");

  return user;
};

export default mongoose.model("User", userSchema);
