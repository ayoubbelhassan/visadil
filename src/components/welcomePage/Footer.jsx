import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import image from './../../assets/imgfooter.png' 
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';




function Footer() {
  return (
    <div className='mt-6 w-full h-full md:pl-32 md:px-0 px-10 py-8 bg-gradient-to-b from-blue-700 to-indigo-900 flex md:flex-row flex-col-reverse'>

        <div className='md:w-1/2 h-full'>
            <div className='flex justify-between md:flex-row flex-col'>

                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-yellow-500 font-Cairo text-2xl font-bold leading-snug mb-4'>Get in touch</h1>
                    <ul className='flex flex-col items-start'>

                        <li className='flex justify-center items-center'>
                            <FaMapMarkerAlt size={16} color='#fff' />
                            <h6 className='text-white font-Cairo text-base font-semibold leading-tight m-2'>Bd Roudani ,14 Etage 2, N°4 25000 - Khouribga, Morocco</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <FaPhoneAlt size={16} color='#fff' />
                            <h6 className='text-white font-Cairo text-base font-semibold leading-tight m-2'>+212602340804</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <FaBeer size={16} color='#fff' />
                            <h6 className='text-white font-Cairo text-base font-semibold leading-tight m-2'>Contact@visadil.com</h6>
                        </li>

                    
                    </ul>

                </div>

                <div className='md:mx-12 md:my-0 my-12'>
                    <h1 className='text-yellow-500 font-Cairo text-2xl font-bold leading-snug mb-4'>Links</h1>

                    <ul className='flex flex-col items-start'>

                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>About</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Offers</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Contact</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Services</h6>
                        </li>

                    
                    </ul>

                </div>

                <div>
                    <h1 className='text-yellow-500 font-Cairo text-2xl font-bold leading-snug mb-4'>Menu</h1>

                    <ul className='flex flex-col items-start'>

                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Visa Service</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Study Abroad</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Work Abroad</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Internship Abroad</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Treatment Abroad</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Travel Abroad</h6>
                        </li>
                        <li className='flex justify-center items-center'>
                            <h6 className='text-white font-Cairo text-base font-normal leading-tight m-1'>Card Resident</h6>
                        </li>


                    
                    </ul>

                </div>
                
            </div>
            <div className='flex justify-start items-center md:py-2 pt-6'>
                <h1 className='md:text-[16px] text-[12px] font-extrabold text-yel font-Cairo'>© VISADIL , </h1>
                <h4 className='md:text-[16px] text-[12px] font-normal text-white font-Cairo m-1'>Copyright 2021 all rights reserved.</h4>
        </div>
    

        </div> 

        <div className='md:w-1/2 h-max flex flex-col justify-center items-center p-4'>
            <img src={image} />
            <div className='flex mt-3'>
                <a href="" className='p-2 bg-white rounded-full m-2'><FaFacebookF color='#000000'/></a>
                <a href="" className='p-2 bg-white rounded-full m-2'><FaTiktok color='#000000'/></a>
                <a href="" className='p-2 bg-white rounded-full m-2'><FaInstagram color='#000000'/></a>
                <a href="" className='p-2 bg-white rounded-full m-2'><FaWhatsapp color='#000000'/></a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer