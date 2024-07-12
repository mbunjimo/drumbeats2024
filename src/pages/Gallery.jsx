import React from 'react'
import { Footer, Header } from '../components'
import { Image, SimpleGrid } from '@mantine/core'
import artguy from '../assets/CompressedMediaDay/artguy.webp'
import sidegirls from '../assets/CompressedMediaDay/sidegirls.webp'
import talk from '../assets/CompressedMediaDay/talk.webp'
import tangazo from '../assets/CompressedMediaDay/tangazo.webp'
import tangazo2 from '../assets/CompressedMediaDay/tangazo2.webp'
import twogirls from '../assets/CompressedMediaDay/twogirls.webp'
import speech from '../assets/CompressedMediaDay/speech.webp'
import dancing from '../assets/CompressedMediaDay/dancing.webp'
import { Helmet } from 'react-helmet'


const Gallery = () => {
    return (
        <div className="flex h-screen flex-col">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery - Tamasha la Utamaduni la kitaifa</title>
                <link rel="canonical" href="www.drumbeats.co.tz/gallery" />
            </Helmet>

            <Header />
            <main className="flex-1 text-center">

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <h2 className='h2-bold'>Gallery</h2>
                </section>

                <section className="wrapper bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                    <div className='wrapper' style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
                        <SimpleGrid
                            type="container"
                            cols={{ base: 1, '300px': 1, '500px': 3 }}
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
