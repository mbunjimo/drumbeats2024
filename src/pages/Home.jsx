import React from 'react'
import { Events, Footer, Header, HomeCarousel } from '../components'
import { Button, Image, SimpleGrid } from '@mantine/core'
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import drumbeatsbanner from '../assets/Drumbeats.jpg'
import sittingwoman from '../assets/sittingwoman.jpg'

const Home = () => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section>
                    <HomeCarousel />
                </section>

                <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                        <div className="flex flex-col justify-center gap-8">
                            <h1 className="h1-bold">We are presenting to you, Drumbeats carnival limted </h1>
                            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
                            <Button variant="filled" color="rgba(0, 0, 0, 1)" className='max-w-[200px]' size="lg" radius="xl"> 
                                <a>
                                    Explore Now
                                </a>
                            </Button>
                        </div>

                        <Image
                            p={30}
                            src={sittingwoman}
                            alt="hero"
                            radius="lg"
                            className='max-h-[500px]'
                            width={100}
                            height={100}
                        // className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                        />
                    </div>
                </section>

                <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
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


                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Home
