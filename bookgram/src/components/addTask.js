import React from 'react'
import {useState} from 'react'

const AddTask = ({addBook}) => {
  const [bookName,setBookName]=useState('')
  const [Author,setAuthor]=useState('')
  const [pages,setPages]=useState('')
  const onSubmit=(e)=>{
    e.preventDefault()

    if (!bookName) {
      alert('Please fill required details')
      return
    }
    if (!Author) {
      alert('Please fill required details')
      
      return
    }
    if (!pages) {
      alert('Please fill required details')
      return
    }
    let id=bookName.length
    addBook(id,bookName,Author,pages)

    setBookName('')
    setAuthor('')
    setPages(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
      <label>BookName</label>
      <input
        type='text'
        placeholder='Add book name'
        value={bookName} onChange={(e)=>setBookName(e.target.value)}
      />
    </div>
    <div className='form-control'>
      <label>Author</label>
      <input
        type='text'
        placeholder='Add Author'
        value={Author} onChange={(e)=>setAuthor(e.target.value)}
      />
    </div>
    <div className='form-control'>
      <label>pages</label>
      <input
        type='number'
        placeholder='Add pages'
        value={pages} onChange={(e)=>setPages(e.target.value)}
      />
    </div>

    <input type='submit' value='Save Book' className='btn btn-block'/>
  </form>
  )
}

export default AddTask