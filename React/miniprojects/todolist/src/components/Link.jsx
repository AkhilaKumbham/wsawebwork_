import React from 'react'
import { useState } from 'react';
import AddInput from './AddInput';
import Display from './Display';
const Link = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]); 
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)); 
    };

  return (
    <>
       <h1>To-Do List</h1>
            <AddInput onAdd={addTask} />
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Display
                        key={index}
                        task={task}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </ul>
    </>
  )
}

export default Link