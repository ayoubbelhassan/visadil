import React from 'react'
import img from './../../assets/aboutimg.png'
import TitleSection from '../util/TitleSection'
import FillButton from '../util/FillButton'
import IconOffers from './../../assets/offerIcon.png'
import IconStudents from './../../assets/studenticon.png'
import IconFile from './../../assets/valideIcon.png'

import Fade from 'react-reveal/Fade';


function About() {

    const list=[
        {
            icon:IconOffers,
            name:'Offers',
            number:'35'
        },
        {
            icon:IconFile,
            name:'Successful File',
            number:'2200'
        },
        {
            icon:IconStudents,
            name:'Students',
            number:'350'
        },
    ]



  return (
    <div className='w-full h-full flex flex-col transform -translate-y-[10vh]'>
        <div className='md:flex w-full justify-start items-center'>

            <div className='w-1/2 h-full ml-32 flex flex-col '>
                <TitleSection>About us</TitleSection>

                <h1 class="text-yel font-cairo text-4xl font-extrabold leading-tight py-6">
                Our Team, Your <br /> Passport to <br />Success.
                </h1>

                <p class="text-black font-Cairo text-base font-semibold leading-relaxed pb-6">Visadil has grown into a leading visa consultancy and processing firm. Located in the heart of Tanger, Morocco, our team is composed of experienced visa consultants, legal professionals, and processing staff. Together, we're committed to providing our clients with comprehensive, efficient, and expert immigration services.    </p>
                
                <FillButton>Let’s talk</FillButton>
            </div>
            <Fade right>
            <img src={img} className='w-1/2 h-full'/>
            </Fade>
            
        </div>

        <div className='w-full  bg-ble rounded-tl-full rounded-br-full px-44 py-4 flex justify-around'>
            {
                list.map((item)=>(
                    <div className='flex justify-center items-center'>
                         <img src={item.icon} alt='img' />
                         <div className='mx-2'>
                            <h1 className='w-max text-white font-Cairo text-3xl font-bold leading-normal tracking-tighter'>+{item.number}</h1>
                            <h4 className='text-white font-Cairo text-base font-normal leading-normal'>{item.name}</h4>
                         </div>
                    </div>
                ))
            }

        </div> 
    </div>
  )
}

export default About