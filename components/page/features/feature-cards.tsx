import { FeaturesCard, FeatureCardProps } from '@/components/ui/feature-card';
import {
  LayoutDashboardIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  Edit2Icon,
  BarChart4Icon,
  Wand2Icon
} from 'lucide-react';

export const features: FeatureCardProps[] = [
  {
    title: {
      icon: <ShieldCheckIcon className='h-5 w-5' />,
      value: 'Secure User Login'
    },
    description: 'Secure and customizable user authentication with login options.'
  },
  {
    title: {
      icon: <LayoutDashboardIcon className='h-5 w-5' />,
      value: 'Intuitive User Dashboard'
    },
    description: 'Dashboard presenting key data and features in one place.'
  },
  {
    title: {
      icon: <CreditCardIcon className='h-5 w-5' />,
      value: 'Seamless Payments'
    },
    description: 'Subscriptions and one-time purchases.'
  },
  {
    title: {
      icon: <Edit2Icon className='h-5 w-5' />,
      value: 'Flexible CMS'
    },
    description: 'Headless CMS integrated into your platform.'
  },
  {
    title: {
      icon: <BarChart4Icon className='h-5 w-5' />,
      value: 'In-Depth Analytics'
    },
    description: 'Real-time analytics on user behavior and app performance.'
  },
  {
    title: {
      icon: <Wand2Icon className='h-5 w-5' />,
      value: 'Full Customization'
    },
    description: 'Customizable themes and components.'
  }
];

export const FeatureCards = () => {
  const sliceIndex = 3;
  const columns = [features.slice(0, sliceIndex), features.slice(sliceIndex)];

  return (
    <div className='flex mx-auto max-w-screen-lg gap-x-2'>
      {columns.map((column, index) => (
        <div key={index} className='flex flex-col w-full md:w-1/2 gap-y-6'>
          {column.map(({ content, description, title, additionalClassNames }) => (
            <FeaturesCard
              additionalClassNames={{
                root: 'shadow-inner shadow-md border-none',
                title: 'flex items-center gap-2 text-xl font-normal',
                header: 'gap-1 max-w-80'
              }}
              key={title.value}
              description={description}
              title={title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
