import { Button, Image, SimpleGrid } from '@mantine/core'
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
    <footer className="border-t pb-16">
      {/* <div className="wrapper flex-between flex flex-col text-center sm:flex-row"> */}
      <SimpleGrid
        cols={{ base: 1, sm: 1, md: 3 }}
        spacing={{ base: 20, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
        className='wrapper  flex'
      >
        <div className='flex flex-row mt-3 items-start align-top relative'>
          <Link to={"/"}>
            {/* <Image
              src={logo}
              width={128}
              h={80}
            /> */}
            <div className='flex flex-row' >
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


        <div className='text-center md:text-start mt-2'>
        <p className='font-semibold text-xl my-5   md:my-1'>For Sponsorships:</p>    
          <p className='text-lg'>
            <a href="tel:+255744927614">+255 744 927 614</a>
          </p>
          <p className='font-semibold text-xl my-5   md:my-1'>Other Contacts:</p>
          <p className='text-lg'>
            <a href="tel:+255762543543">+255 762 543 543</a>

          </p>
          <p className='text-lg mb-3'>
            <a href="mailto:info@drumbeats.co.tz">info@drumbeats.co.tz</a>
          </p>
          {/* <p className='text-lg'>+255 676 890 789</p> */}
          <p className='font-semibold text-xl my-5 md:my-3'>Social Media</p>
          <div className='flex flex-row items-center justify-center mt-3 mb-2 md:my-2 md:justify-start gap-3 '>
            <Link to={'https://www.facebook.com/profile.php?id=61561314334608'}>
              <Avatar src={facebook} radius=" " alt="it's me" mr={2} />
            </Link>
            <Link to={'https://www.instagram.com/drumbeats_carnival/'}>
              <Avatar src={instagram} radius=" " alt="it's me" mx={5} />
            </Link>
            <Link to={'https://www.instagram.com/drumbeats_carnival/'}>
              <Avatar src={youtube} radius=" " alt="it's me" ml={2} />
            </Link>
          </div>
        </div>

        <div className=' text-center md:text-start '>
          <p className='font-semibold text-xl mt-3 mb-3 md:my-1'>Our Address</p>
          <p className='flex justify-center md:justify-start w-full tect-center md:text-left '>Raha Towers, <br /> 3rd Floor, <br /> Dar es Salaam, Tanzania</p>
          <br />
          <p> &copy; 2024 Drumbeats. All Rights Reserved.</p>
        </div>
      </SimpleGrid>
      {/* </div> */}
    </footer >
  )
}

export default Footer
