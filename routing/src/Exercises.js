import React, { useState } from "react";

const API_BASE = "http://localhost:3003"

export default function Exercises() {
    const [exercises, setExercises] = useState([])
    const [newExercise, setNewExercise] = useState('')

    const addExerciseName = async () => {
        const data = await fetch(API_BASE + "/exercise/new", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                text: newExercise
            })
        }).then(res => res.json())

        setExercises([...exercises, data])
        setNewExercise('')
    }

    return (
        <div className="add-exercises-container">
            <label htmlFor="workout-title">Workout Title</label>
            <div className="exercise-btn-container">
                <input type="text" className="workout-title" onChange={(e) => setNewExercise(e.target.value)} value={newExercise}/>
                <button id="add-workout-btn" onClick={addExerciseName}>+</button>
            </div>
        </div>
    )
}