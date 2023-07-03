import mongoose from "mongoose";
import Workout from "../Modals/Workout.js";

// functino to get all worukoit
export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get single workout
export const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No data for this search" });

  const singleWorkout = await Workout.findById(id);

  if (!singleWorkout) return res.status(404).json({ error: "no such workout" });

  res.status(200).json(singleWorkout);
};

// create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const newWorkout = await Workout.create({ title, load, reps });
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No data for this search" });

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout)
    return res
      .status(400)
      .json({ error: "No workout found, nothing deleted." });
  res.status(202).json(workout);
};

// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No data for this search" });

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout)
    return res
      .status(400)
      .json({ error: "No workout found, nothing updated." });
  res.status(202).json(workout);
};
