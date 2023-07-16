import React from 'react'

function FillButton(props) {
  return (
    <button className='w-max text-white bg-yel text-[20px] border-2 border-yel font-semibold font-Cairo py-2 px-6 rounded hover:bg-transparent hover:text-yel ease-in duration-300 '>
    {props.children}
  </button>
  )
}

export default FillButton