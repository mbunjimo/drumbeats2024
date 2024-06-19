import React from 'react'
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image, Overlay, Text } from '@mantine/core';
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import Autoplay from 'embla-carousel-autoplay';


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
                Drumbeats carnival limted
              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>Book and learn helpful tips
                from 3,168+ mentors in world-class companies with our global community.</p>
            </div>
          </div>



        </Carousel.Slide>
        <Carousel.Slide className='relative'>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={groupphoto}
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
                Drumbeats carnival limted
              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>Book and learn helpful tips
                from 3,168+ mentors in world-class companies with our global community.</p>
            </div>
          </div>

        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={utiajiwasaini}
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
                Drumbeats carnival limted
              </p>
              <p className='text-white p-regular-20 md:p-regular-24'>Book and learn helpful tips
                from 3,168+ mentors in world-class companies with our global community.</p>
            </div>
          </div>

        </Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
