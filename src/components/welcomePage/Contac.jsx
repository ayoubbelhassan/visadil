import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import FillButton from '../util/FillButton';
function Contac() {

  const ListContact=[
    {
      icon:<FaMapMarkerAlt size={24} color='#fff' />,
      message:'Bd Roudani ,14 Etage 2, N°4 25000 - Khouribga, Morocco'
    } ,
    {
      icon:<FaBeer size={24} color='#fff' />,
      message:'+212602340804'
    } ,
    {
      icon:<FaPhoneAlt size={24} color='#fff' />,
      message:'Contact@visadil.com'
    } ,
  ]


  return (
    <div className='w-full h-screen flex mt-11'>
      <div className='w-1/2 h-full bg-ble ml-32 flex flex-col justify-center items-start py-8 px-24'>
        <span className='w-max text-white bg-yel text-[24px] font-semibold font-Cairo px-6 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl'>
          Contact
        </span>

        <h1 className='text-white font-Cairo text-[52px] font-bold leading-tight py-4 '>Get in touch , Let's Take the First Step Together.</h1>
        <h6 className='text-white font-Cairo text-[26px] font-medium leading-tight'>Our team is dedicated to your satisfaction. We respond within 24 hours.</h6>
        <div className='flex flex-col pt-24'> 
          {
            ListContact.map((element)=>(
              <div className='flex py-2'>
                {element.icon}
                <p className='text-white px-8'>{element.message}</p>
                
              </div>
            ))
          }

        </div>

      </div>

      <div className='w-1/2 h-full mr-32 flex flex-col justify-center'>
        <h1 className='text-ble font-Cairo text-[50px] font-bold leading-tight p-16'>Send us <br /> a message</h1>
      <div className='w-full mx-16'>

        <div className='flex justify-between py-6'>

          <input type='text' placeholder='Full name' className='border-b-2 text-gray-500 text-[22px] w-1/2 mx-2 focus:outline-none focus:border-ble'/>
          <input type='email' placeholder='Email' className='border-b-2 text-gray-500 text-[22px] w-1/2 mx-2 focus:outline-none focus:border-ble'/>

        </div>

        <input type='text' placeholder='Subject' className='border-b-2 text-gray-500 text-[22px] w-full mx-2 focus:outline-none focus:border-ble py-6'/>

        <textarea placeholder='Message' className='border-b-2 text-gray-500 text-[22px] w-full mx-2 focus:outline-none focus:border-ble py-6'/>
        <div className='my-8'>
        <FillButton>Send Message</FillButton>
        </div>
        

      </div>

        
      </div>
    </div>
  )
}

export default Contac