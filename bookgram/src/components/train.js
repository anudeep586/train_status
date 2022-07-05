import React from 'react'
import Button from './button'


const Train = (task) => {
  const on=(task)=>{
    console.log(task.tasks,"task")
  }
  return (
    <div className='task1'>
    <h3>{task.tasks.trainName}</h3>
    <p> Source:- {task.tasks.source}</p>
    <p>Destination:- {task.tasks.destination}</p>
    <p>Run Days:- {task.tasks.run_days}</p>
    <Button onclick={on(task)} name="train status"/>


</div>
  )
}

export default Train