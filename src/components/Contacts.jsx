import React from 'react'
import instagram from '../assets/logo/instagramw.png'
import mail from '../assets/logo/mail.png'
import phonecall from '../assets/logo/phonecall.png'
import sponsor from '../assets/logo/sponsor.png'
import { Anchor, Center, Grid, Image } from '@mantine/core'

const Contacts = () => {

    return (
        <section id="contacts" className="wrapper my-8 flex flex-col justify-center gap-8 md:gap-12">

            <div className='flex w-full justify-center'>
                <p className='text-2xl text-center'>Have questions? we are here to help you!</p>
            </div>

            <Center>
                <Grid grow gutter="xl">
                    <Grid.Col span={{ base: 12, md: 3, lg: 2 }}>
                        <Center>
                            <Anchor href="tel:+255744927614" underline="hover">
                                <div className='flex flex-col'>
                                    <Center>
                                        <Image
                                            src={phonecall}
                                            w={80}
                                        />
                                    </Center>
                                    <p className='font-semibold mt-2 text-center text-black'>+255 744 927 614 <br /> sponsorships</p>
                                </div>
                            </Anchor>
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 3, lg: 2 }}>
                        <Center>
                            <Anchor href="tel:+255762543543" underline="hover">
                                <div className='flex flex-col'>
                                    <Center>
                                        <Image
                                            src={phonecall}
                                            w={80}
                                        />
                                    </Center>
                                    <p className='font-semibold mt-2 text-black'>+255 762 543 543</p>
                                </div>
                            </Anchor>
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <Center>
                            <Anchor href="mailto:info@drumbeatzcarnival.co.tz" underline="hover">
                                <div className='flex flex-col'>
                                    <Center>
                                        <Image
                                            src={mail}
                                            w={80}
                                        />
                                    </Center>
                                    <p className='font-semibold mt-2 text-black' >info@drumbeatzcarnival.co.tz</p>
                                </div>
                            </Anchor>
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <Center>
                            <Anchor href="https://www.instagram.com/drumbeats_carnival/" underline="hover">
                                <div className='flex flex-col'>
                                    <Center>
                                        <Image
                                            src={instagram}
                                            w={80}
                                        />
                                    </Center>
                                    <p className='font-semibold mt-2 text-black'>@drumbeats_carnival</p>
                                </div>
                            </Anchor>

                        </Center>

                    </Grid.Col>
                </Grid>
            </Center>

        </section>
    )
}

export default Contacts
