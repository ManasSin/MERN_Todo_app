import React, { useEffect } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutsForm from "../Components/WorkoutsForm";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
import { useAuthContext } from "../Hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    if (user) fetchWorkouts();
  }, [dispatch, user]);

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
