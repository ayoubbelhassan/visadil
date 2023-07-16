import React, { useState } from 'react';
//import Button from './Button';
import logo from './../../assets/visadilLogo.png'
import Button from '../util/Button';

function Navbar() {
  const [Open, setOpen] = useState(false);
  let Links = [
    { name: 'Home', link: '/' }, 
    { name: 'About us', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Offres', link: '/' },
    { name: 'Partners', link: '/' },
    { name: 'Contact us', link: '/' },
  ];

  return (
    <div className='w-full absolute top-0 left-0 z-20'>
      <div className='md:flex justify-between items-center py-4 md:px-32 px-7'>
        <div className='flex md:justify-center items-center'>
          <img src={logo} alt='Logo' className='w-[230px]' />
        </div>

        <div className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' 
        onClick={()=>setOpen(!Open)} >
          {Open?'X':'='}
        </div>

        <ul className={` md:flex md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${Open ? 'top-20 opacity-100 shadow-md' : 'top-[-490px]'} md:items-center`}>

          {Links.map((item) => (
            <li key={item.name} className='md:ml-8 text-[16px] md:my-0 my-7 '>
              <a href={item.link} className='text-white hover:text-yel duration-500 font-Cairo'>
                {item.name}
              </a>
            </li>
          ))}
         <Button>Login</Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
