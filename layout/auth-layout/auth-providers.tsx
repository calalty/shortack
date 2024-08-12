import { Button } from '@/components/ui/button';
import { URLS } from '@/consts/urls';
import { Apple } from '@/icons/apple';
import { Facebook } from '@/icons/facebook';
import { Google } from '@/icons/google';
import { signIn } from 'next-auth/react';

export const AuthProviders = () => {
  const providers = [
    { provider: 'Google', icon: <Google /> },
    { provider: 'Facebook', icon: <Facebook /> },
    { provider: 'Apple', icon: <Apple /> }
  ];

  return (
    <div className='flex flex-col gap-2'>
      {providers.map(({ icon, provider }) => (
        <Button
          onClick={() => signIn(provider.toLowerCase(), { callbackUrl: URLS.HOME })}
          key={provider}
          variant='outline'
          size='lg'
          className='rounded-full h-12'
        >
          <span>{icon}</span> <span className='m-auto'>{`Continue with ${provider}`}</span>
        </Button>
      ))}
    </div>
  );
};
