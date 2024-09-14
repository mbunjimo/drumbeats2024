import React from 'react'
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image, Overlay, Text } from '@mantine/core';
import president from '../assets/drsamia.jpg'
import Autoplay from 'embla-carousel-autoplay';
import artguy from '../assets/CompressedMediaDay/artguy.webp'
import sidegirls from '../assets/CompressedMediaDay/sidegirls.webp'
import talk from '../assets/CompressedMediaDay/talk.webp'
import tangazo from '../assets/CompressedMediaDay/tangazo.webp'
import tangazo2 from '../assets/CompressedMediaDay/tangazo2.webp'
import twogirls from '../assets/CompressedMediaDay/twogirls.webp'
import speech from '../assets/CompressedMediaDay/speech.webp'
import dancing from '../assets/CompressedMediaDay/dancing.webp'

const HomeCarousel = () => {

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <div className='wrapper'>
      <Carousel
        height={600}
        loop
        className='rounded-lg'
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        radius="xl"
        withControls={false}
      >
        <Carousel.Slide className='relative'>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={president}
          />


          <Overlay
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            radius="xl"
            zIndex={0}
          />

          <div className='absolute bottom-0 left-0 right-0 text-center flex flex-col justify-center w-full'>
            <div className='w-full p-8'>
              <p className='h3-bold text-white text-center z-50'>
                Tamasha la Kitaifa la Utamaduni September 23 <sup>rd</sup> 2024  
                {/* 20-27<sup>th</sup> */}
                

              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>
                '120 TRIBES, 1 PEOPLE ' <br />
                TWENZETU SONGEA
              </p>
            </div>
          </div>



        </Carousel.Slide>
        <Carousel.Slide className='relative'>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={speech}
          />

          <Overlay
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            radius="xl"
            zIndex={0}
          />

          <div className='absolute bottom-0 left-0 right-0 text-center flex flex-col justify-center w-full'>
            <div className='w-full p-8'>
              <p className='h3-bold text-white text-center z-50'>
              Tamasha la Kitaifa la Utamaduni Press launch
              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>
                The press launch for the national cultural festival was <br />
                held on makumbusho village grounds dar es salaam on 21<sup>st</sup> June 2024  
              </p>
            </div>
          </div>

        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={tangazo2}
          />

          <Overlay
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            radius="xl"
            zIndex={0}
          />

          <div className='absolute bottom-0 left-0 right-0 text-center flex flex-col justify-center w-full'>
            <div className='w-full p-8'>
              <p className='h3-bold text-white text-center z-50'>
              Celebrate Tanzanian Culture
              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>The smiles radiate excitement and pride in showcasing Tanzania's rich cultural heritage.
                 Join us for an unforgettable celebration of art, music, and culture this September!</p>
            </div>
          </div>

        </Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
