import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@mantine/core';

const InfiniteCarousel = () => {

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      height={300}
      // slideSize="25%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      withControls={false}
      plugins={[autoplay.current]}
      slideSize={{ base: '100%', sm: '50%', md: '25%' }}
    // onMouseEnter={autoplay.current.stop}
    // onMouseLeave={autoplay.current.reset} 
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
      <Carousel.Slide><Image
        radius="xl"
        className='rounded-lg h-full w-full'
        src={groupphoto}
      /></Carousel.Slide>
      <Carousel.Slide>
        <Image
          radius="xl"
          className='rounded-lg h-full w-full'
          src={groupphoto}
        />
      </Carousel.Slide>
      <Carousel.Slide><Image
        radius="xl"
        className='rounded-lg h-full w-full'
        src={groupphoto}
      /></Carousel.Slide>
    </Carousel>
  )
}

export default InfiniteCarousel
