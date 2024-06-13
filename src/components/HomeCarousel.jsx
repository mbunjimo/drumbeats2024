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
      <Carousel.Slide>
        <Image
            radius="xl"  
            className='rounded-lg h-full w-full'
            src={president}
        />
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
