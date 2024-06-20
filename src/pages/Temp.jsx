import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import sittingwoman from '../assets/sittingwoman.jpg';
import axios from 'axios';
import baselogo from '../assets/BaseLogo.png';
import { Footer, Header } from '../components';
import { Button, Center, Image, Input, NumberInput, Select } from '@mantine/core';
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Group, Text, Badge } from '@mantine/core';
import mnwcartoon from '../assets/mnwcartoon.png';
import textdrumbeats from '../assets/textdrumbeats.png';

const Temp = () => {
    const [opened, { close, open }] = useDisclosure(true);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { name: '', phone: '', email: '', source: '' },
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            phone: (value) => (/^\+?[1-9]\d{1,14}$/.test(value) ? null : 'Invalid phone number'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            source: (value) => (value ? null : 'Source is required'),
        },
    });

    const handleSubmit = async (values) => {
        const body = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            source: values.source,
        };

        // Send 'body' to the backend
        console.log(body);
        
        close();

        try {
            const response = await axios.post('https://drumbeatsbackend.onrender.com/visitors', body);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }

        // Close the modal after submission
    };

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
                        />

                        <div className="flex flex-col justify-center gap-8">
                            <h1 className="h1-bold">It's Media Day at Makumbusho Village</h1>
                            <p className="p-regular-20 md:p-regular-24">
                                Our website is currently under final stages of construction. We apologize for any inconvenience and appreciate your patience.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />


            <Modal opened={opened} onClose={close} size="auto" radius="xl">
                <div className="flex flex-col gap-3 w-full md:w-[500px] p-3">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-center items-center">
                            <Image
                                radius="md"
                                className="h-[50px] w-[50px] md:h-[40px] md:w-[40px]"
                                src={mnwcartoon}
                            />
                            <Image
                                radius="md"
                                className="h-[50px] w-[50px] md:h-[40px] md:w-[40px]"
                                src={textdrumbeats}
                            />
                        </div>

                        <p className="text-center p-2 text-md">
                            Thank you for your interest in Drum Beats Carnival! Please provide your information to get latest event details & exciting news.
                        </p>
                    </div>

                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg ml-1">Name:</p>
                            <Input
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color="black"
                                required
                                {...form.getInputProps('name')}
                            />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg ml-1 mt-1">Phone number:</p>
                            <NumberInput
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color="black"
                                required
                                {...form.getInputProps('phone')}
                            />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg ml-1 mt-1">Email:</p>
                            <Input
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color="black"
                                required
                                {...form.getInputProps('email')}
                            />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg ml-1 mt-1">Where did you hear about us?</p>
                            <Select
                                size="lg"
                                radius="xl"
                                placeholder=""
                                searchable
                                data={[
                                    'Instagram',
                                    "Newspaper or Magazine",
                                    'Facebook',
                                    'Friends or Family',
                                    'Other'
                                ]}
                                {...form.getInputProps('source')}
                            />
                        </div>

                        <div className='w-full'>
                            <Center>
                                <Button
                                    type="submit"
                                    variant="filled"
                                    color="rgba(0, 0, 0, 1)"
                                    className="w-full"
                                    size="md"
                                    mt={10}
                                    w={{ base: 275, sm: 275, lg: 475 }}
                                    radius="xl"
                                >
                                    <p className="text-lg">Submit</p>
                                </Button>
                            </Center>
                        </div>


                    </form>
                </div>
            </Modal>


        </div>
    );
};

export default Temp;
