import { ListItem, NavigationItemsProps } from '@/components/ui/navigation-menu';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';

export const mockNavigationMenuComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
];

export const mockNavigationMenu: NavigationItemsProps['items'] = [
  {
    title: 'Documentation',
    children: (
      <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
        <li className='row-span-3'>
          <NavigationMenuLink asChild>
            <a
              className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
              href='/'
            >
              <div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
              <p className='text-sm leading-tight text-muted-foreground'>
                Beautifully designed components that you can copy and paste into your apps.
                Accessible. Customizable. Open Source.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <ListItem href='/docs' title='Introduction'>
          Re-usable components built using Radix UI and Tailwind CSS.
        </ListItem>
        <ListItem href='/docs/installation' title='Installation'>
          How to install dependencies and structure your app.
        </ListItem>
        <ListItem href='/docs/primitives/typography' title='Typography'>
          Styles for headings, paragraphs, lists...etc
        </ListItem>
      </ul>
    )
  },
  {
    title: 'Components',
    children: (
      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
        {mockNavigationMenuComponents.map(({ description, href, title }) => (
          <ListItem key={title} title={title} href={href}>
            {description}
          </ListItem>
        ))}
      </ul>
    )
  },
  { link: { name: 'Link', url: '/link' } }
];
