import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@mantine/core';
import artguy from '../assets/CompressedMediaDay/artguy.webp'
import sidegirls from '../assets/CompressedMediaDay/sidegirls.webp'
import talk from '../assets/CompressedMediaDay/talk.webp'
import tangazo from '../assets/CompressedMediaDay/tangazo.webp'
import tangazo2 from '../assets/CompressedMediaDay/tangazo2.webp'
import twogirls from '../assets/CompressedMediaDay/twogirls.webp'
import speech from '../assets/CompressedMediaDay/speech.webp'
import dancing from '../assets/CompressedMediaDay/dancing.webp'


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
