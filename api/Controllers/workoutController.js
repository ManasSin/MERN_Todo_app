import mongoose from "mongoose";
import Workout from "../Modals/Workout.js";

// functino to get all worukoit
export const getWorkouts = async (req, res) => {
  const user_id = req.user._id;

  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });

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
  const emptyFields = [];

  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("load");
  if (!reps) emptyFields.push("reps");
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill all fields", emptyFields });
  }
  try {
    const user_id = req.user._id;

    const newWorkout = await Workout.create({ title, load, reps, user_id });
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
