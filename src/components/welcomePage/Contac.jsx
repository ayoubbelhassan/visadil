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
    <div className='w-full md:mx-0  flex flex-col md:flex-row justify-center items-center mt-11 '>
      <div className='md:w-1/2 w-5/6  h-full bg-ble md:ml-32 flex flex-col justify-center items-start py-16 md:px-24 md:mx-0   px-2 rounded-xl'>
        <span className='w-max text-white bg-yel md:text-[24px]  text-[16px] font-semibold font-Cairo px-6 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl'>
          Contact
        </span>

        <h1 className='text-white font-Cairo md:text-[52px] text-[32px] font-bold leading-tight py-4 '>Get in touch , Let's Take the First Step Together.</h1>
        <h6 className='text-white font-Cairo md:text-[26px] text-[18px] font-medium leading-tight'>Our team is dedicated to your satisfaction. We respond within 24 hours.</h6>
        {/* <div className='flex flex-col pt-24'> 
          {
            ListContact.map((element)=>(
              <div className='flex py-2'>
                {element.icon}
                <p className='text-white px-8'>{element.message}</p>
                
              </div>
            ))
          }

        </div> */}

      </div>

      <div className='md:w-1/2 w-full h-full md:mr-32 flex flex-col justify-center'>
        <h1 className='text-ble font-Cairo md:text-[50px] text-[32px] font-bold leading-tight p-8'>Send us <br /> a message</h1>
      <div className='md:w-full w-5/6 md:mx-16 mx-8'>

        <div className='w-full flex justify-between py-6 md:flex-row flex-col '>

          <input type='text' placeholder='Full name' className='border-b-2 text-gray-500 md:text-[22px] text-[18px] md:w-1/2 w-ful md:mx-2 my-2 focus:outline-none focus:border-ble'/>
          <input type='email' placeholder='Email' className='border-b-2 text-gray-500 md:text-[22px] text-[18px] md:w-1/2 w-full md:mx-2 mt-6 focus:outline-none focus:border-ble'/>

        </div>

        <input type='text' placeholder='Subject' className='border-b-2 text-gray-500md:text-[22px] text-[18px] w-full    focus:outline-none focus:border-ble py-6'/>

        <textarea placeholder='Message' className='border-b-2 text-gray-500 md:text-[22px] text-[18px] w-full   focus:outline-none focus:border-ble py-6'/>
        <div className='my-8'>
        <FillButton>Send Message</FillButton>
        </div>
        

      </div>

        
      </div>
    </div>
  )
}

export default Contac