import Express from "express";
import {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../Controllers/workoutController.js";

export const router = Express.Router();

// get all workout
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getSingleWorkout);

// create a new workout
router.post("/", createWorkout);

// update a workout
router.patch("/:id", updateWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);
