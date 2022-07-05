import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Button from './button'
import UpdateTask from './updateTask'

const Task = ({task,onDelete,updateBook}) => {
  const [showForUpdate,setshowForUpdate]=useState(false)
  const onAdd=()=>{
    setshowForUpdate(!showForUpdate)
  }
  return (
    <div className='task'>
        <h3>{task.bookName}<FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
        <p>{task.author}</p>
        <p>{task.pages}</p>
        <Button  onclick={onAdd} name="Update"/>
    {showForUpdate && <UpdateTask updateBook={updateBook} id={task.id} oldbookName={task.bookName} oldpages={task.pages} oldAuthor={task.Author}/>}
    </div>
  )
}

export default Task