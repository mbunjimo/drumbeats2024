import React, { useState } from 'react';
import sittingwoman from '../assets/sittingwoman.jpg';
import axios from 'axios';
import baselogo from '../assets/BaseLogo.png';
import { Footer, Header } from '../components';
import { Button, Image, Input, Select } from '@mantine/core';
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Group, Text, Badge } from '@mantine/core';
import mnwcartoon from '../assets/mnwcartoon.png';
import textdrumbeats from '../assets/textdrumbeats.png';

const Temp = () => {
    const [opened, { close, open }] = useDisclosure(true);
    const [count, { increment, decrement }] = useCounter(3, { min: 0 });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [source, setSource] = useState('');

    const handleSubmit = async ()  => {

        if (!name || !phone || !email) {
            alert('Please fill in all required fields.');
            return;
        }

        const body = {
            name,
            phone,
            email,
            source,
        };

        // Send 'body' to the backend
        console.log(body);

        try {
            const response = await axios.post('https://drumbeatsbackend.onrender.com/visitors', body);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }

        // Close the modal after submission
        close();
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
                            <h1 className="h1-bold">whats about drumbeats carnival?</h1>
                            <p className="p-regular-20 md:p-regular-24">
                                We are an organizing company that aims at delivering this event with very high expectations of it being the best carnival in Tanzania and beyond.
                                We are an organizing company that aims at delivering this event with very high expectations of it being the best carnival in Tanzania and beyond.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <Modal opened={opened} onClose={close} size="auto" radius="xl">
                <div className='flex flex-col gap-3 w-full md:w-[500px] p-3'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-center items-center'>
                            <Image
                                radius="md"
                                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                                src={mnwcartoon}
                            />
                            <Image
                                radius="md"
                                className='h-[50px] w-[50px] md:h-[40px] md:w-[40px]'
                                src={textdrumbeats}
                            />
                        </div>

                        <p className='text-center p-2 text-lg'>
                            Thank you for your interest in Drum Beats Carnival! Please provide your information so we can keep you updated with the latest event details exciting news.
                        </p>
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-xl ml-1'>Name:</p>
                            <Input
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color='black'
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-semibold text-xl ml-1 mt-1'>Phone Number:</p>
                            <Input
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color='black'
                                value={phone}
                                required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-semibold text-xl ml-1 mt-1'>Email:</p>
                            <Input
                                size="lg"
                                radius="xl"
                                placeholder=""
                                color='black'
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-semibold text-xl ml-1 mt-1'>Where did you hear about us?</p>
                            <Select
                                size="lg"
                                radius="xl"
                                placeholder=""
                                searchable
                                data={[
                                    'Instagram',
                                    'Facebook',
                                    'Friends or Family',
                                ]}
                                value={source}
                                onChange={setSource}
                            />
                        </div>
                    </div>

                    <Button
                        variant="filled"
                        color="rgba(0, 0, 0, 1)"
                        className='w-full'
                        size="md"
                        mt={10}
                        radius="xl"
                        onClick={handleSubmit}
                    >
                        <p className='text-xl'>Submit</p>
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default Temp;
