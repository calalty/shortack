import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
}

const formInputs: Array<'email' | 'password'> = ['email', 'password'];

const labels: Record<'email' | 'password', string> = {
  email: 'Email',
  password: 'Password'
};

export const AuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        {formInputs.map(value => (
          <div key={value}>
            <Label htmlFor={value}>{labels[value]}</Label>
            <Input
              className='mt-1'
              id={value}
              {...register(value as keyof FormValues, { required: `${labels[value]} is required` })}
            />
            {errors[value] && <p className='text-red-600 mt-1'>{errors[value]?.message}</p>}
          </div>
        ))}
      </div>

      <Button type='submit' variant='shortstack' size='lg' className='w-full mt-10'>
        Submit
      </Button>
    </form>
  );
};
