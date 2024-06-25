import React from 'react'
import { Footer, Header } from '../components'
import { Image, SimpleGrid } from '@mantine/core'
import artguy from '../assets/Mediaday/artguy.jpg'
import sidegirls from '../assets/Mediaday/sidegirls.jpg'
import talk from '../assets/Mediaday/talk.jpg'
import tangazo from '../assets/Mediaday/tangazo.jpg'
import tangazo2 from '../assets/Mediaday/tangazo2.jpg'
import twogirls from '../assets/Mediaday/twogirls.jpg'
import speech from '../assets/Mediaday/speech.jpg'
import dancing from '../assets/Mediaday/dancing.jpg'


const Gallery = () => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 text-center">

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className='h2-bold'>Gallery</h2>
                </section>

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className='wrapper' style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
                        <SimpleGrid
                            type="container"
                            cols={{ base: 1, '300px': 2, '500px': 3 }}
                            spacing={{ base: 10, '300px': 'xl' }}
                        >
                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={artguy}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={sidegirls}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={talk}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={tangazo}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={tangazo2}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={twogirls}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={speech}
                            />

                            <Image
                                radius="md"
                                h="auto"
                                w="auto"
                                fit="contain"
                                src={dancing}
                            />




                        </SimpleGrid>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Gallery
