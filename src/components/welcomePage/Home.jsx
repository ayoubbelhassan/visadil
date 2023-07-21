import React from 'react'
import FillButton from '../util/FillButton'
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    
    <div className="bg-homebg w-full h-[110vh] bg-fixed bg-no-repeat bg-center bg-cover" style={{ 
        WebkitClipPath: 'polygon(0 0, 0 98%, 8% 97%, 15% 97%, 22% 97%, 31% 98%, 46% 99%, 62% 100%, 77% 100%, 92% 99%, 100% 97%, 100% 0)',
        clipPath: 'polygon(0 0, 0 98%, 8% 97%, 15% 97%, 22% 97%, 31% 98%, 46% 99%, 62% 100%, 77% 100%, 92% 99%, 100% 97%, 100% 0)'
      }}>




        
       
          <div  className='w-full h-full bg-gradient-to-b from-transparent via-transparent to-ble flex flex-col justify-center items-center'>
          
          <Fade top>
          <div className='w-full h-full flex flex-col justify-center items-center'>

          
          <h3 className='text-center font-Cairo text-3xl text-yel font-normal leading-normal'>Visadil</h3>
          

          <h1 class="text-center text-white font-cairo text-6xl font-extrabold leading-tight my-7">
          Your Guide to Easier &  <br/> More Secure Immigration
          </h1>
          
          <FillButton>Get Your Free Consultation</FillButton>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="45" viewBox="0 0 33 50" fill="none" className='mt-10'>
            <rect x="0.5" y="0.5" width="31.6389" height="49" rx="15.8194" stroke="white"/>
            <path d="M15.9722 11.1111V18.75" stroke="white" stroke-linecap="round"/>
        </svg>


        </div>

        </Fade>
        </div>

       
      </div>

  )
}

export default Home