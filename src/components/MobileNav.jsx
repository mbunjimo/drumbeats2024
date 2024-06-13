import { Button, Image } from '@mantine/core'
import React from 'react'
import close from '../assets/close.png'

const MobileNav = ({ onClose }) => {
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
        <p className='text-center my-2 text-xl border-b'>Home</p>
        <p className='text-center my-2 text-xl border-b'>About Us</p>
        <p className='text-center my-2 text-xl border-b'>Media</p>
        <p className='text-center my-2 text-xl'>Connect</p>
        <div className='text-center mt-3'>
          <Button variant="filled" color="rgba(0, 0, 0, 1)" className='max-w-[200px]' size="md" radius="xl">
            <a>
              Explore Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
