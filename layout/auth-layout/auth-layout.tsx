import { Card } from '@/components/ui/card';
import { AuthForm } from './auth-form';
import { AuthProviders } from './auth-providers';
import { TextLink } from '@/components/ui/link';
import { usePathname } from 'next/navigation';
import { URLS } from '@/consts/urls';

export type AuthLayoutProps = {
  title: string;
  isSignUp?: boolean;
};

export const AuthLayout = ({ title, isSignUp }: AuthLayoutProps) => {
  return (
    <div className='h-full flex flex-col justify-center items-center p-32'>
      <Card
        additionalClassNames={{
          root: 'md:w-[46rem] py-6',
          title: 'text-2xl md:w-80 m-auto text-center mb-2',
          content: 'md:w-[22.5rem] m-auto'
        }}
        content={
          <div className='flex flex-col'>
            <AuthProviders />
            <hr role='presentation' className='my-8 -mx-24'></hr>
            <AuthForm />
            <hr role='presentation' className='my-8 -mx-24'></hr>

            <p>
              <span>{isSignUp ? 'Already have an account?' : `Don't have an account?`}</span>
              <TextLink
                className='p-0 ml-2'
                size='lg'
                url={isSignUp ? URLS.LOGIN : URLS.SIGN_UP}
                variant='link'
              >
                {isSignUp ? 'Sign in now' : 'Sign up now'}
              </TextLink>
              .
            </p>
          </div>
        }
        title={title}
      />
    </div>
  );
};
