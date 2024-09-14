import React from 'react'

const Button = ({text,icon, className, onClick}) => {
  return (
    <button onClick={onClick} className='py-2 px-4 border border-white rounded-md'>
      {text}
      {icon}
      {className}
    </button>
  )
}

export default Button
 