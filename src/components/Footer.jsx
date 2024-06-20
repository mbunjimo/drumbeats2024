import { Button, Image } from '@mantine/core'
import React from 'react'
import logo from '../assets/logo.png'
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import mnwcartoon from '../assets/mnwcartoon.png'
import textdrumbeats from '../assets/textdrumbeats.png'
import { Avatar } from '@mantine/core';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4   text-center sm:flex-row">
        <div className='flex flex-row gap-3 items-center'>
          <Link to={"/"}>
            {/* <Image
              src={logo}
              width={128}
              h={80}
            /> */}
            <div className='flex flex-row items-center' >
              <Image
                radius="md"
                h={70}
                width={128}
                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                src={mnwcartoon}
              />
              <Image
                radius="md"
                h={60}
                w={200}
                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                src={textdrumbeats}
              />

            </div>
          </Link>
        </div>


        <div className='flex flex-col  justify-start md:text-left'>
          <p className='font-semibold text-xl my-3  md:my-1'>Contacts:</p>
          <p className='text-lg'>
            <a href="tel:+255762543543">+255 762 543 543</a>
          </p>
          {/* <p className='text-lg'>+255 676 890 789</p> */}
          <p className='font-semibold text-xl my-3'>Social Media:</p>
          <div className='flex flex-row items-center justify-center md:justify-start gap-3 '>
            <Link to={'/'}>
              <Avatar src={facebook} radius=" " alt="it's me" />
            </Link>
            <Link to={'https://www.instagram.com/drumbeats_carnival/'}>
              <Avatar src={instagram} radius=" " alt="it's me" />
            </Link>
            <Link to={'/'}>
              <Avatar src={youtube} radius=" " alt="it's me" />
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start '>
          <Button variant="filled" disabled color="rgba(0, 0, 0, 1)" className='max-w-[200px]  mb-5' size="md" radius="xl" >
            <a>
              Send us Message
            </a>
          </Button>
          <p>2024 Drumbeats. All Rights reserved.</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
