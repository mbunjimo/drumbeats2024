import { useState } from 'react';
import { Button, Image } from '@mantine/core';
import React from 'react';
import close from '../assets/close.png';
import { Link } from 'react-router-dom';
import VisitorsForm from './VisitorsForm';

const MobileNav = ({ onClose }) => {
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
    <div className='fixed inset-0 z-40'>
      <div className='fixed inset-0 bg-black bg-opacity-50'></div>
      <div className='absolute top-3 w-[90%] p-3 bg-white rounded-lg shadow-lg flex-col gap-2 z-50 mx-auto left-0 right-0 animate__animated animate__slideInDown'>
        <div className='flex w-full justify-end p-2'>
          <Image
            src={close}
            h={20}
            w={20}
            onClick={onClose}
          />
        </div>
        <Link to={'/'}>
          <p className='text-center my-2 text-xl border-b'>Home</p>
        </Link>
        <Link to={'/aboutus'}>
          <p className='text-center my-2 text-xl border-b'>About Us</p>
        </Link>
        <Link to={'/gallery'}>
          <p className='text-center my-2 text-xl border-b'>Gallery</p>
        </Link>
        <div className='text-center mt-3'>
          <Button variant="filled" color="rgba(0, 0, 0, 1)" className='max-w-[200px]' size="md" radius="xl" onClick={handleButtonClick}>
            Get connected
          </Button>
        </div>
      </div>

      {/* Conditionally render the VisitorsForm modal */}
      {isModalOpen && (
        
            <VisitorsForm isOpen={isModalOpen} onClose={handleModalClose} />

      )}
    </div>
  );
};

export default MobileNav;
