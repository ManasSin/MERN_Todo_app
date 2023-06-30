import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from "../Modals/User.js";
import bcrypt from "bcryptjs";
import cors from "cors";

await mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log("Error connecting to database"));

const app = express();
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ email: email, password: hashedPassword });
  user.save().then((userInfo) => {
    console.log(userInfo);
    res.send(""); // send back a response to the client
  });
});

app.listen(4000);
