'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/text-input-field';
import { Button } from '@/components/ui/button';

type FormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

export const loginSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Enter valid email').required(),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <section className='max-w-[1440px] mx-auto ~p-5/28'>
      <div className='w-full lg:w-6/12 mx-auto'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter first name'
            id='email'
            errors={errors}
            label='First name*'
            {...register('first_name')}
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter last name'
            id='email'
            errors={errors}
            label='Last name*'
            {...register('last_name')}
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter email address'
            id='email'
            errors={errors}
            label='Email address*'
            {...register('email')}
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter phone number'
            id='email'
            errors={errors}
            label='Phone*'
            {...register('phone')}
          />
          <div>
            <Button className='lg:max-w-full'>Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
