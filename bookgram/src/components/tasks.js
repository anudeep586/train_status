import React from 'react'
import Task from './task'

const Tasks = ({tasks,onDelete,updateBook}) => {

    
  return (
    <div>{tasks.map((task)=>(<Task task={task} onDelete={onDelete} updateBook={updateBook}/>))}</div>
  )
}

export default Tasks