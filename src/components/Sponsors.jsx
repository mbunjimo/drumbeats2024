import { Center, Grid, Image } from '@mantine/core'
import React from 'react'
import majimaji from '../assets/logo/majimaji.png'
import startimes from '../assets/logo/startimes.jpeg'
import mcas from '../assets/logo/mcas.jpeg'
import ttb from '../assets/logo/ttb.png'

const Sponsors = () => {
    return (
        <section id="sponsors" className="wrapper mt-8 flex flex-col justify-center gap-8 md:gap-12">

            <div className='flex w-full justify-center'>
                <p className='text-2xl text-center'>Proudly sponsored by</p>
            </div>

            <Center>
                <Grid grow gutter="xl">
                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                        <Center>
                            <Image
                                src={mcas}
                                w={130}
                            />
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                        <Center>
                            <Image
                                src={ttb}
                                w={180}
                            />
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Center>
                            <Image
                                src={majimaji}
                                w={130}
                            />
                        </Center>

                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Center>
                            <Image
                                src={startimes}
                                w={130}
                            />
                        </Center>

                    </Grid.Col>
                </Grid>
            </Center>

        </section>
    )
}

export default Sponsors
