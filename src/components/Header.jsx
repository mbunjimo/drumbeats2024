import React from 'react'
import { Button, Image } from '@mantine/core';
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className='w-full border-b '>
      <div className='wrapper flex items-center justify-between'>

        <div>
          <Image
            radius="md"
            h={40}
            w={40}
            src={logo}
          />
        </div>

        <div>
          <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            <li className='flex-center p-medium-16 whitespace-nowrap'>Home</li>
            <li className='flex-center p-medium-16 whitespace-nowrap'>About Us</li>
            <li className='flex-center p-medium-16 whitespace-nowrap'>Media</li>
            <li className='flex-center p-medium-16 whitespace-nowrap'>Connect</li>
          </ul>
        </div>


        <div>
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

export default Navbar
