import React from 'react'
import Task from './Task'



const Tasks = ({tasks, onDelete,onToggle }) => {


    return (
        // map array is used to create a list
        <>
            {tasks.map((task, index) => 
            (<Task key= {index} task={task} onDelete={onDelete}
            onToggle={onToggle}
            /> ))}
        </>
    )
}

export default Tasks
