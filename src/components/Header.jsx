import React, { useState } from 'react'
import { Button, Image } from '@mantine/core';
import logo from '../assets/logo.png'
import menu from "../assets/menu.png"
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';


const Navbar = () => {

  // State to manage the visibility of MobileNav
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  // Function to toggle MobileNav visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div className='static'>
      <div className='w-full border-b '>
        <div className='wrapper flex items-center justify-between'>

          <div className='flex flex-row items-center'>
            <Image
              radius="md"
              // h={50}
              // w={50}
              className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
              src={logo}
            />
            <p className='font-bold text-xl text-left md:text-lg'>Drumbeats  Carnival</p>
          </div>

          <div className='hidden md:block'>
            <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
              <Link to={'/'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>Home</li>
              </Link>
              <Link to={'/aboutus'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>About Us</li>
              </Link>
              <Link to={'/gallery'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>Media</li>
              </Link>
              <Link to={'/gallery'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>Connect</li>
              </Link>

            </ul>
          </div>

          <div className='md:hidden'>
            <Image
              src={menu}
              h={40}
              w={40}
              onClick={toggleMobileNav}
            />
          </div>


          <div className='hidden md:block' >
            <Button variant="filled" color="rgba(0, 0, 0, 1)" className='max-w-[200px]' size="md" radius="xl" >
              <a>
                Explore Now
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* navbar for mobile users */}

      {isMobileNavVisible && (
        <div className='w-full flex items-center justify-center'>
          <MobileNav onClose={toggleMobileNav} />
        </div>
      )}
    </div>
  )
}

export default Navbar
