import React from 'react'
import TitleSection from '../util/TitleSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,  A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'; 
import Offre1 from './../../assets/offre1.png'
import FillButton from '../util/FillButton';


function Offers() {


  const ListOffers=[
    {
      number:1 ,
      image:Offre1,
      title:'Bachelor in Spain',
      description:'Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...'
    } ,
    {
      number:2 ,
      image:Offre1,
      title:'Bachelor in Spain',
      description:'Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...'
    }
    ,
    {
      number:3 ,
      image:Offre1,
      title:'Bachelor in Spain',
      description:'Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...'
    } ,
    {
      number:4 ,
      image:Offre1,
      title:'Bachelor in Spain',
      description:'Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...'
    },

  ]



  return (
    <div className='flex flex-col justify-center items-center w-full mt-16 bg-ble p-7'>
          <span className='w-max border border-white font-Cairo font-semibold text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-6 py-2'>
         Our Offres
        </span>
        <h1 class="text-center font-Cairo text-white text-4xl font-bold leading-105 px-96 my-14">
            Your Gateway to a World of Opportunities , Discover Our Immigration Offers.
        </h1>
        <div className='w-2/3 mt-2 mb-3'> 
        <Swiper
      
      modules={[ Pagination , A11y]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true , }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex justify-between'
    >
      {
        ListOffers.map((element)=>(
          <SwiperSlide> 
          <div className='w-80 h-[423px] m-10 flex justify-center items-center rounded-md'>
            <div className='w-full mx-4 h-full  bg-white border rounded-md'>
              <div className='w-full h-1/2'>
                <img src={Offre1} className='w-full h-full object-cover z-0 rounded-md'/>
              </div>
              <div className='w-full h-1/2 bg-white rounded-lg p-4 flex flex-col justify-between'>

              <h1 class="text-[22px] font-Cairo  font-bold">Your Heading Text</h1>
                <p className='text-gray-600 font-Cairo text-base font-normal leading-7'>Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...</p>
                <button className='w-max text-white bg-yel text-[16px] border-2 border-yel font-medium font-Cairo py-1 px-3 rounded hover:bg-transparent hover:text-yel ease-in duration-300 shadow-lg'>
                Read me!
                </button>

              </div>
              
            </div>
          </div>
        </SwiperSlide>
        ))
      }
        </Swiper>
        </div>


    </div>
  )
}

export default Offers