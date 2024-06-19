import React from 'react'
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
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
          {/* <div class="absolute inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/40 bottom-0 rounded-3xl h-56 w-full text-center">
            <div className='absolute flex flex-col w-full text-center bottom-24'>
              <h3 className='  text-white text-4xl font-bold '>Hello there testing new stuff</h3>
              <p className='p-regular-20 md:p-regular-24 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis consequatur? Nobis hic laborum ab nemo totam iste in at possimus unde ut, quae tempora similique, facilis natus eaque incidunt!</p>
            </div>
          </div> */}
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={groupphoto}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius="xl"
            className='rounded-lg h-full w-full'
            src={utiajiwasaini}
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
