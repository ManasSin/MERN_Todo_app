import Express from "express";
import {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../Controllers/workoutController.js";
import { requireAuth } from "../Middleware/requireAuth.js";

export const router = Express.Router();

// require auth for all workout routes
router.use(requireAuth);

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
