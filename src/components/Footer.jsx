import { Image } from '@mantine/core'
import React from 'react'
import logo from '../assets/logo.png'
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import { Avatar } from '@mantine/core';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4   text-center sm:flex-row">
        <div className='flex flex-row gap-3 items-center'>
          <a href='/'>
            <Image
              src={logo}
              width={128}
              h={80}
            />
          </a>
          <p className='font-bold text-2xl text-left'>Drumbeats <br /> Carnival </p>
        </div>


        <div className='flex flex-col md:text-left'>
          <p className='font-semibold text-xl my-3  md:my-1'>Contacts:</p>
          <p className='text-lg'>+255 676 890 789</p>
          <p className='text-lg'>+255 676 890 789</p>
          <p className='font-semibold text-xl my-3'>Social Media:</p>
          <div className='flex flex-row items-center justify-center md:justify-start gap-3 '>
            <Avatar src={twitter} radius=" " alt="it's me" />
            <Avatar src={instagram} radius=" " alt="it's me" />
          </div>
        </div>

        <p>2024 Drumbeats. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
