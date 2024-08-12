import { Button } from '@/components/ui/button';
import { Apple } from '@/icons/apple';
import { Facebook } from '@/icons/facebook';
import { Google } from '@/icons/google';

export const AuthProviders = () => {
  const providers = [
    { provider: 'Google', icon: <Google /> },
    { provider: 'Facebook', icon: <Facebook /> },
    { provider: 'Apple', icon: <Apple /> }
  ];

  return (
    <div className='flex flex-col gap-2'>
      {providers.map(({ icon, provider }) => (
        <Button variant='outline' size='lg' className='rounded-full h-12'>
          <span>{icon}</span> <span className='m-auto'>{`Continue with ${provider}`}</span>
        </Button>
      ))}
    </div>
  );
};
