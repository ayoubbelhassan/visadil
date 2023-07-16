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
    <div className='flex flex-col justify-center items-center w-full mt-16'>
        <TitleSection>Our Offers</TitleSection>
        <h1 class="text-center font-Cairo text-ble text-4xl font-bold leading-105 px-96 my-14">
            Your Gateway to a World of Opportunities , Discover Our Immigration Offers.
        </h1>
        <div className='w-1/2 mt-2 mb-3'> 
        <Swiper
      
      modules={[ Pagination , A11y]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true , }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex justify-between'
    >
      {
        ListOffers.map((element)=>(
          <SwiperSlide> 
          <div className='w-full h-80 mb-10 flex justify-center items-center'>
            <div className='w-full mx-4 h-full  bg-ble border rounded-3xl'>
              <div className='relative w-full h-2/3 roun'>
                <div className='absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-ble z-10 flex flex-col justify-end items-start px-2'>
                  <h6 className='text-white font-Cairo text-[12px] font-normal'>Offer - {element.number}</h6>
                  <h1 className='text-yel font-Cairo text-2xl font-bold leading-6 mr-3'>Bachelor in Spain </h1>
                </div>
                <img src={Offre1} className='absolute w-full h-full object-cover z-0 rounded-lg'/>
              </div>
              <div className='w-full  h-1/3 bg-ble rounded-lg p-2'>
                <p className='text-white font-Cairo text-[10px] font-medium'>Bachelor’s degree 2022-2023 in Spain is the best idea if like to study in spain medicine business ...</p>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        ))
      }
        </Swiper>
        </div>
        <FillButton>Get Started Now! </FillButton>


    </div>
  )
}

export default Offers