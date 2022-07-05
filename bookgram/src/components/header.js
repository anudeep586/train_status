import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title,onAdd,showAdd,onAddPnr}) => {
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={showAdd ? 'close' : 'Add'} onclick={onAdd}/>
        <Button text={showAdd ? 'close' : 'Add'} onclick={onAddPnr} name="Pnr staus"/>
    </header>
  )
}

Header.defaultProps={
    title:"BookGram"
}
Header.propTypes={
    title:PropTypes.string.isRequired
}

export default Header
//In this way we can do using props or object destructuring
// const Header = (props) => {
//     return (
//       <header>
//           <h1>{props.title}</h1>
//       </header>
//     )
//   }