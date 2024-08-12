'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

type FormKeys = keyof FormValues;

const formInputs: Array<FormKeys> = ['name', 'email', 'password'];

const labels: Record<FormKeys, string> = {
  name: 'Full name',
  email: 'Email',
  password: 'Password'
};

export const AuthForm: React.FC = () => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const filteredInputs =
    pathname === '/signup' ? formInputs : formInputs.filter(input => input !== 'name');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        {filteredInputs.map(value => (
          <div key={value}>
            <Label htmlFor={value}>{labels[value]}</Label>
            <Input
              className='mt-1'
              id={value}
              {...register(value, { required: `${labels[value]} is required` })}
            />
            {errors[value] && <p className='text-red-600 mt-1 text-sm'>{errors[value]?.message}</p>}
          </div>
        ))}
      </div>

      <Button type='submit' variant='shortstack' size='lg' className='w-full mt-10'>
        Submit
      </Button>
    </form>
  );
};
