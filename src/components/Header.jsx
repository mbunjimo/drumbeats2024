import React, { useState } from 'react';
import { Button, Image } from '@mantine/core';
import mnwcartoon from '../assets/mnwcartoon.png';
import textdrumbeats from '../assets/textdrumbeats.png';
import menu from "../assets/menu.png";
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import VisitorsForm from './VisitorsForm';

const Navbar = () => {
  // State to manage the visibility of MobileNav
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  // Function to toggle MobileNav visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  // State to control the visibility of the VisitorsForm modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to show the VisitorsForm modal
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the VisitorsForm modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='static'>
      <div className='w-full border-b '>
        <div className='wrapper flex items-center justify-between'>
          <Link to={'/'}>
            <div className='flex flex-row items-center'>
              <Image
                radius="md"
                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                src={mnwcartoon}
              />
              <Image
                radius="md"
                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                src={textdrumbeats}
              />
            </div>
          </Link>

          <div className='hidden md:block'>
            <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
              <Link to={'/'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>Home</li>
              </Link>
              <Link to={'/aboutus'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>About Us</li>
              </Link>
              <Link to={'/gallery'}>
                <li className='flex-center p-medium-16 whitespace-nowrap'>Gallery</li>
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

          <div className='hidden md:block'>
            <Button variant="filled" color="rgba(0, 0, 0, 1)" className='max-w-[200px]' size="md" radius="xl" onClick={handleButtonClick}>
              Get connected
            </Button>
          </div>
        </div>
      </div>

      {isMobileNavVisible && (
        <div className='w-full flex items-center justify-center'>
          <MobileNav onClose={toggleMobileNav} />
        </div>
      )}

      {isModalOpen && (
        <VisitorsForm isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default Navbar;
