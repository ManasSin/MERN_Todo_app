import React, { useEffect } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutsForm from "../Components/WorkoutsForm";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";

const Home = () => {
  const workoutURL = "/api/workouts";

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(workoutURL);
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutsForm />
    </div>
  );
};

export default Home;
