import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@mantine/core';
import artguy from '../assets/Mediaday/artguy.jpg'
import sidegirls from '../assets/Mediaday/sidegirls.jpg'
import talk from '../assets/Mediaday/talk.jpg'
import tangazo from '../assets/Mediaday/tangazo.jpg'
import tangazo2 from '../assets/Mediaday/tangazo2.jpg'
import twogirls from '../assets/Mediaday/twogirls.jpg'
import speech from '../assets/Mediaday/speech.jpg'
import dancing from '../assets/Mediaday/dancing.jpg'


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
      dragFree
      slideSize={{ base: '75%', sm: '50%', md: '25%' }}
    // onMouseEnter={autoplay.current.stop}
    // onMouseLeave={autoplay.current.reset} 
    >
      <Carousel.Slide>
        <Image
          radius="xl"
          className='rounded-lg h-full w-full'
          src={artguy}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          radius="xl"
          className='rounded-lg h-full w-full'
          src={sidegirls}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          radius="xl"
          className='rounded-lg h-full w-full'
          src={tangazo2}
        />
      </Carousel.Slide>
      <Carousel.Slide><Image
        radius="xl"
        className='rounded-lg h-full w-full'
        src={dancing}
      /></Carousel.Slide>
      <Carousel.Slide>
        <Image
          radius="xl"
          className='rounded-lg h-full w-full'
          src={talk}
        />
      </Carousel.Slide>
    </Carousel>
  )
}

export default InfiniteCarousel
