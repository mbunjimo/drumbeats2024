import React, { useEffect, useState } from 'react'
import { Contacts, Events, Footer, Header, HomeCarousel, InfiniteCarousel, Sponsors, VisitorsForm } from '../components'
import { Button, Image, SimpleGrid } from '@mantine/core'
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import drumbeatsbanner from '../assets/Drumbeats.jpg'
import tangazo from '../assets/Mediaday/tangazo.jpg'
import collage1 from '../assets/Mediaday/collage1.png'
import collage2 from '../assets/Mediaday/collage2.png'
import sittingwoman from '../assets/sittingwoman.jpg'
import { Link } from 'react-router-dom'
import { formatDistanceToNowStrict } from 'date-fns';
import {Helmet} from "react-helmet";


const Home = () => {


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        eventStarted: false,
    });

    useEffect(() => {
        const targetDate = new Date('2024-07-24T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                    eventStarted: false,
                });
            } else {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    eventStarted: true,
                });
            }
        };

        const intervalId = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(intervalId);
    }, []);


    // State to control the visibility of the VisitorsForm modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to show the VisitorsForm modal
    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    // Function to close the VisitorsForm modal
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex h-screen flex-col">


            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Tamasha la Utamaduni la kitaifa</title>
                <link rel="canonical" href="www.drumbeats.co.tz" />
            </Helmet>

            <Header />
            <main className="flex-1">
                <section>
                    <HomeCarousel />
                </section>

                <Sponsors />

                <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                        <div className="flex flex-col justify-center gap-8">
                            <h1 className="h1-bold">Utamaduni Festival 2024</h1>
                            <p className="p-regular-20 md:p-regular-24">A week-long celebration of Tanzanian culture in Songea, Ruvuma, from July 20th-26th, 2024. This festival will highlight the theme "Our Culture, Our Dignity," featuring music, dance, art, and traditional cuisine from Tanzania's 120 tribes. The festival aims to unite Tanzanians from all walks of life and attract international visitors.</p>
                            <Button variant="filled" color="#3A2C2C" className='max-w-[200px]' size="lg" radius="xl" onClick={handleButtonClick}>
                                Get connected
                            </Button>
                        </div>

                        <Image
                            p={30}
                            src={tangazo}
                            alt="hero"
                            radius="lg"
                            className='max-h-[500px]'
                            width={100}
                            height={100}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />
                    </div>
                </section>

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className='flex w-full justify-center'>
                        <p className='text-2xl text-center'>All About Ruvuma Utamaduni Festival, July 2024. Countdown to the carnival.</p>
                    </div>
                    <div className='flex flex-col w-full justify-center'>
                        {!timeLeft.eventStarted ? (
                            <div className='text-5xl mt-4 text-center'>
                                <p className='block md:inline'>{timeLeft.days} days: </p>
                                <p className="block md:inline">{timeLeft.hours} hours: </p>
                                <p className="block md:inline">{timeLeft.minutes} minutes: </p>
                                <p className="block md:inline">{timeLeft.seconds} seconds</p>
                            </div>
                        ) : (
                            <p className='text-5xl mt-4 text-center'>The event has started!</p>
                        )}
                    </div>
                    <div>

                    </div>
                </section>

                <section id="gallery" className="wrapper my-8 flex flex-row justify-between gap-8 md:gap-12">
                    <h2 className="h2-bold">Gallery</h2>

                    <Link to={'/gallery'}>
                        <Button variant="filled" color="#3A2C2C" className='max-w-[200px]' size="md" radius="xl">
                            <a>
                                See More
                            </a>
                        </Button>
                    </Link>

                </section>

                <InfiniteCarousel />

                <Contacts />

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className="h2-bold text-center">Our Services</h2>


                    <div className="wrapper grid grid-cols-1  md:grid-cols-2 2xl:gap-0">
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


                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 border-t">

                        <Image
                            src={collage2}
                            alt="hero"
                            radius="lg"
                            className='max-h-[500px]'
                            width={100}
                            height={100}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />

                        <div className="flex flex-col justify-center gap-8 md:ml-4">
                            <p className="text-4xl font-bold text-start">Event Management:</p>
                            <p className="p-regular-20 md:text-2xl text-start">
                                <span className='font-semibold'>Comprehensive Event Planning: </span> From concept to execution, we manage every detail to ensure successful events. <br />
                                <span className='font-semibold'>Festival Organization: </span> We organize large-scale cultural festivals, bringing together communities to celebrate Tanzanian heritage. <br />
                                <span className='font-semibold'> Corporate Events: </span> Tailored event solutions for businesses, including product launches, CSR activities, and corporate gatherings. <br />
                            </p>

                        </div>



                    </div>

                </section>


                {/* <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                    <h2 className="h2-bold">Planned to host <br /> Thousands of Events</h2>



                    <SimpleGrid
                        cols={{ base: 1, sm: 1, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                    >
                        <div>
                            <Events />
                        </div>
                        <div>
                            <Events />
                        </div>
                        <div>
                            <Events />
                        </div>

                    </SimpleGrid>


                </section> */}

            </main>
            <Footer />

            {isModalOpen && (
                <VisitorsForm isOpen={isModalOpen} onClose={handleModalClose} />
            )}
        </div>
    )
}

export default Home
