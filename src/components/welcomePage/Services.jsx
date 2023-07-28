import React from 'react'
import TitleSection from '../util/TitleSection'
import { FaUserFriends } from 'react-icons/fa';
import { HiOutlineDocument } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import { FaRoute } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaStamp } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';





function Services() {
  const listServices=[
    {
      icon:<FaUserFriends size={60} color='#0049AA'/>,
      title:'Guidance & Consulting',
      description:'Guidance  in the right way for all people for a successful travel...'
    },
    {
      icon:<HiOutlineDocument size={60} color='#0049AA'/>,
      title:'Admissions',
      description:'Obtaining admission to educational institutes, interships and work centers...'
    },
    {
      icon:<BiWorld  size={60} color='#0049AA'/>,
      title:'Visa Services',
      description:'Assistance in preparing a visa file , adjusting all documents with requirements for Visa....'
    },
    {
      icon:<FaRoute size={60} color='#0049AA'/>,
      title:'Travel Services',
      description:'After you obtain a visa, we Assistant you to prepare for your travel wonderfully'
    },
    {
      icon:<FaHome size={60} color='#0049AA'/>,
      title:'Accommodation Services',
      description:'Assistant  you find adequate housing at the best prices'
    },
    {
      icon:<FaRegAddressCard size={60} color='#0049AA'/>,
      title:'Card Residence Services',
      description:'Asistance in preparing Card resendce file , Appointment...'
    },
    {
      icon:<FaStamp size={60} color='#0049AA'/>,
      title:'Equivalency Of Licenses & Evidence',
      description:'Asistance in preparation Equation file for your Driving license or Evidences...'
    },
    {
      icon:<FaPhoneAlt size={60} color='#0049AA'/>,
      title:'Others Services',
      description:'Do not hesitate to contact us for more info...'
    },
  ]

  return (
    <div className='flex flex-col justify-center items-center w-full md:my-0 my-8'>
        <TitleSection>Our services </TitleSection>
        <h1 class="text-center font-Cairo text-ble md:text-4xl text-2xl my-8 font-bold leading-105 md:px-96 md:my-14">
          Making Your Immigration Process Smooth and Stress-Free.
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 gap-4 md:mx-32 ms-4'>
     
          {
            listServices.map((item)=>(
              <Fade bottom>
              <div className='flex flex-col justify-center items-start border border-ble p-4 rounded-md shadow-xl hover:scale-105 transition-transform duration-300'>
                <div className='my-2'>{item.icon}</div>
                <h1 className='text-black font-Cairo text-base font-medium leading-122 my-2'>{item.title}</h1>
                <h4 className='text-gray-600 font-Cairo text-sm font-normal leading-119'>{item.description}</h4>
              </div>
              </Fade>
            ))
          }
         
        </div>

    </div>
  )
}

export default Services