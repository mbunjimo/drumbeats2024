import React from 'react'
import sittingwoman from '../assets/sittingwoman.jpg'
import baselogo from '../assets/BaseLogo.png'
import { Footer, Header } from '../components'
import { Button, Image } from '@mantine/core'


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
                            <h1 className="h1-bold">whats about drumbeats carnival?</h1>
                            <p className="p-regular-20 md:p-regular-24">We are a an organisaing company that aims at delivering this event with very high expectations of it being gthe best carnival in tanzania and beyond.
                            We are a an organisaing company that aims at delivering this event with very high expectations of it being gthe best carnival in tanzania and beyond. </p>
                            
                        </div>
                    </div>
                </section>

                {/* <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className='flex flex-col justify-center gap-6'>
                        <h1 className='h1-bold'>Our Sponsors</h1>
                        <p>the sponsors go here</p>
                    </div>
                </section>

                <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className='flex flex-col justify-center gap-6'>
                        <h1 className='h1-bold'>More about us</h1>
                        <p className='p-regular-20 md:p-regular-24"'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quasi aspernatur hic voluptatibus, impedit facere quas sed obcaecati pariatur excepturi saepe cupiditate necessitatibus eaque cum, amet iste. Consequuntur, blanditiis atque.</p>
                    </div>
                </section> */}


            </main>
            <Footer />
        </div>
    )
}

export default AboutUs
