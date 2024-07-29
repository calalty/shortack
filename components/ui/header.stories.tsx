import { Header } from '@/components/ui/header';
import { Shortack } from '@/icons/shortack';
import { mockNavigationMenu } from '@/mocks/navigation-menu.mock';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: <Shortack />,
    navigationItems: {
      items: mockNavigationMenu
    },
    actionLinks: [{ variant: 'default', children: 'Default', url: '#' }]
  }
};
