import Header from "./components/header";
import Tasks from "./components/tasks";
import { useState,useEffect } from 'react'
import AddTask from "./components/addTask";
import Pnr from "./components/pnr";
import Train from "./components/train";

const App=()=> {
  const [showAddBooks,setshowAddBooks]=useState(false)
  const [addPnr,setaddPnr]=useState(false)
  const [trainD,settrainD]=useState([])
  const [tasks,setTasks]=useState([])
  useEffect(()=>{
    const intialFetch=async()=>{
      const result=await fetch('http://localhost:8080/books',{
        headers:{
          'Access-Control-Allow-Origin': '*',
        }
      })
      const jsonData=await result.json()
      setTasks(jsonData)
    }
    intialFetch()
  },[])

const updateBook=async(id,bookName,Author,pages)=>{
  await fetch(`http://localhost:8080/${id}`,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({id:id,bookName:bookName,author:Author,pages:pages})
  })
  
  setTasks(tasks.map((ele)=>{
    if(ele.id===id){
      return {id:id,bookName:bookName,Author:Author,pages:pages}
    }
    else{
      return ele
    }
  }))
}
const pnrStatus=async(pnr)=>{
  const data=await fetch(`http://localhost:8080/pnr/${pnr}`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  const resultJSON=await data.json();
  settrainD([resultJSON])
}

const deleteTask=async(id)=>{
  await fetch(`http://localhost:8080/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
  })
  setTasks(tasks.filter((task)=>task.id!==id))
}
const AddBook=async(id,bookName,Author,pages)=>{
  const data={id:id,bookName:bookName,author:Author,pages:pages}
  const result=await fetch('http://localhost:8080/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const resultJSON=await result.json();
  console.log(resultJSON)
  setTasks([...tasks,{id:id,bookName:bookName,author:Author,pages:pages}])
}
  return (
    <div className="container">
     {showAddBooks &&<AddTask addBook={AddBook}/>}
     {addPnr && <Pnr pnrStatus={pnrStatus}/>}
      <Header title="BookGram" onAdd={()=>setshowAddBooks(!showAddBooks)} showAdd={showAddBooks} onAddPnr={()=>setaddPnr(!addPnr)}/>
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask}  updateBook={updateBook}/>: "No books"}
     {trainD.length>0 ? <Train tasks={trainD[0]} />:""}
    </div>
  );
}

export default App;
