import React from 'react'

const Button = ({text,icon, className, onClick}) => {
  return (
    <button onClick={onClick} className='py-2 px-4 text-white border border-white rounded-md'>
      {text}
      {icon}
      {className}
    </button>
  )
}

export default Button
 