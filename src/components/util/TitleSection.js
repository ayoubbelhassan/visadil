import React from 'react'

function TitleSection(props) {
  return (
    <span className='w-max border border-ble font-Cairo font-semibold text-ble rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-6 py-2'>
         {props.children}
    </span>
  )
}

export default TitleSection