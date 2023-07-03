import dotenv from "dotenv";
import Express from "express";
import { router as workoutRouts } from "./Routes/index.js";
import mongoose, { mongo } from "mongoose";

// config packages
const app = Express();
dotenv.config();

// middlewares
app.use(Express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use("/api/workouts", workoutRouts);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("Server is connect and listening on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// mongodb+srv://WorkoutAppAdmin:<password>@rawdy.j0jmbvo.mongodb.net/?retryWrites=true&w=majority
