import React from 'react'
import PropTypes from 'prop-types'


const Button = ({name,onclick}) => {
  return <button onClick={onclick} className='btn btn-success'>{name}</button>
}

Button.defaultProps={
    name:"add"
}

Button.propTypes={
    name:PropTypes.string,
    onclick:PropTypes.func
}


export default Button