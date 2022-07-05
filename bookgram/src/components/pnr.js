import React  from 'react'
import {useState} from 'react'


const Pnr = ({pnrStatus}) => {
    const [pnr,setpnr]=useState('')
  const onSubmit=(e)=>{
    e.preventDefault()

    if (!pnr) {
      alert('Please fill required details')
      return
    }
    pnrStatus(pnr)

    setpnr('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
      <label>Train status</label>
      <input
        type='text'
        placeholder='Add train no'
        value={pnr} onChange={(e)=>setpnr(e.target.value)}
      />
    </div>

    <input type='submit' value='Pnr status' className='btn btn-block'/>
  </form>
  )
}

export default Pnr