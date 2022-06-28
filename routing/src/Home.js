import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
    const [goToExercises, setGoToExercises] = useState(false)

    if (goToExercises) {
        return <Navigate to="/exercises" />
    }

    return (
      <div className="homepage-container">
        <div className="left-screen">
          <h1>trackr</h1>
          <h3>Organize your workouts to maximize your progress.</h3>
        </div>
        <div className="right-screen">
          <div className="start-workout">Start Workout</div>
          <div className="your-workouts">Your Workouts</div>
          <div className="add-workout" onClick={() => setGoToExercises(true)}>Add Exercises</div>
          <div className="calender">Check Calender</div>
        </div>
      </div>
    );
  }
  