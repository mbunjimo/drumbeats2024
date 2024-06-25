import React from 'react';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { Button, Center, Image, Input, NumberInput, Select, Modal } from '@mantine/core';
import mnwcartoon from '../assets/mnwcartoon.png';
import textdrumbeats from '../assets/textdrumbeats.png';

const VisitorsForm = ({ isOpen, onClose }) => {
  const form = useForm({
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

    try {
      const response = await axios.post('https://drumbeatsbackend.onrender.com/visitors', body);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }

    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} size="auto" radius="xl">
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
                'Newspaper or Magazine',
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
  );
};

export default VisitorsForm;
