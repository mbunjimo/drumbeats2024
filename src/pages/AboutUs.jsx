import React from 'react'
import sittingwoman from '../assets/sittingwoman.jpg'
import tangazo from '../assets/Mediaday/tangazo.jpg'
import collage1 from '../assets/Mediaday/collage1.png'
import collage2 from '../assets/Mediaday/collage2.png'
import baselogo from '../assets/BaseLogo.png'
import { Footer, Header } from '../components'
import { Button, Image, Overlay, SimpleGrid } from '@mantine/core'


const AboutUs = () => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 text-center">

                <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">


                        <Image
                            p={30}
                            src={baselogo}
                            alt="hero"
                            radius="lg"
                            className='max-h-[500px]'
                            width={100}
                            height={100}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />


                        <div className="flex flex-col justify-center gap-8">
                            <h1 className="h1-bold">About Us</h1>
                            <p className="p-regular-20 md:p-regular-24">Drumbeats Carnival is a premier company dedicated to the promotion of arts,
                                culture, and event management in Tanzania. Based in the heart of Dar es Salaam at
                                Raha Towers, our mission is to celebrate and preserve the rich cultural heritage of Tanzania through vibrant and engaging events. We believe in the power of culture to unite people, foster understanding, and inspire creativity. </p>

                        </div>
                    </div>
                </section>


                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className="h2-bold">Our Services</h2>


                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                        <div className="flex flex-col justify-center gap-8">
                            <p className="text-4xl font-bold text-start">Arts and Cultural Promotions</p>
                            <p className="p-regular-20 md:text-2xl text-start">
                                <span className='font-semibold'>Showcasing Tanzanian Art:</span> We promote local artists by organizing exhibitions, art fairs, and cultural shows. <br />
                                <span className='font-semibold'>Music and Dance Performances:</span> Celebrating traditional and contemporary Tanzanian music and dance forms <br />
                                <span className='font-semibold'>Craft and Heritage Markets:</span> Providing platforms for artisans to display and sell their crafts. <br />
                            </p>

                        </div>

                        <Image
                            src={collage1}
                            alt="hero"
                            radius="lg"
                            fit='contain'
                            h={600}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />
                    </div>


                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 border-t md:bordrer-0 ">

                        <Image
                            src={collage2}
                            alt="hero"
                            radius="lg"
                            className='max-h-[500px]'
                            width={100}
                            height={100}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />

                        <div className="flex flex-col justify-center gap-8  md:ml-4">
                            <p className="text-4xl font-bold text-start">Event Management:</p>
                            <p className="p-regular-20 md:text-2xl text-start">
                                <span className='font-semibold'>Comprehensive Event Planning: </span> From concept to execution, we manage every detail to ensure successful events. <br />
                                <span className='font-semibold'>Festival Organization: </span> We organize large-scale cultural festivals, bringing together communities to celebrate Tanzanian heritage. <br />
                                <span className='font-semibold'> Corporate Events: </span> Tailored event solutions for businesses, including product launches, CSR activities, and corporate gatherings. <br />
                            </p>

                        </div>



                    </div>


                   
                </section>

                {/* <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className="h2-bold">Vision</h2>
                    <p className="p-regular-20 md:p-regular-24">To be the leading cultural and event management company in East Africa, showcasing the diverse heritage of Tanzania and promoting unity through arts and cultural celebrations.</p>

                </section>


                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className="h2-bold">Mission</h2>
                    <p className="p-regular-20 md:p-regular-24">Our mission is to create memorable and impactful events that celebrate the rich cultural diversity of Tanzania, promote local artists, and engage communities both locally and internationally.</p>

                </section>

 */}






            </main>
            <Footer />
        </div>
    )
}

export default AboutUs
