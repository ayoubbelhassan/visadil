import React from 'react'

function Button(props) {
  return (
    <button className=' text-yel text-[16px] border-2 border-yel font-medium font-Cairo py-2 px-6 rounded md:ml-24'>
        {props.children}
    </button>
  )
}

export default Button  