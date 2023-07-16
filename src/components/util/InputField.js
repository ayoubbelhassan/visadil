import React from 'react'

function InputField(props) {
  return (
    <input type={props.type} placeholder={props.place} className='border-b-2 text-2xl'/>
  )
}

export default InputField