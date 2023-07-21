import React from 'react'
import TitleSection from '../util/TitleSection'

const data=[
    {
        id:1,
        title:'Get Ready To Receive your Visa',
        description:'Amet minim mollit no duisdeserunt ulamco.'
    },
    {
        id:1,
        title:'Get Ready To Receive your Visa',
        description:'Amet minim mollit no duisdeserunt ulamco.'
    },
    {
        id:1,
        title:'Get Ready To Receive your Visa',
        description:'Amet minim mollit no duisdeserunt ulamco.'
    },
]

function Progressing() {
  return (
    <div className='bg-propage w-full h-[100vh] bg-fixed bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center'>
        <TitleSection>Working process</TitleSection>

        <h1 class="text-center font-Cairo text-ble text-4xl font-bold leading-105 px-96 my-14">
          Making Your Immigration Process Smooth and Stress-Free.
        </h1>

        <div className='w-full flex justify-between px-32'>
        {
            data.map((item)=>(
                <div className='relative flex flex-col justify-center items-center bg-white w-72 h-72 rounded-full p-4'>
                    <div className='bg-white shadow-2xl w-20 h-20  absolute right-2 top-2 rounded-full border-2 border-dashed border-ble flex justify-center items-center'>
                        <div className='bg-ble shadow-2xl w-14 h-14 rounded-full flex flex-col justify-center items-center'>
                            <h1 className='text-white text-center font-Cairo text-[25px] font-semibold leading-5'>0{item.id}</h1>
                            <h1 className='text-white text-center font-Cairo text-[18px] font-semibold leading-5'>Step</h1>
                        </div>

                    </div>
                    <h1 className='text-center text-black font-Cairo text-3xl font-bold leading-7'>{item.title}</h1>
                    <h4 className='text-gray-600 text-center font-poppins text-base font-normal leading-5 mt-3'>{item.description}</h4>
                </div>
            ))
        }


        </div>
      



    </div>
  )
}

export default Progressing