import { ReactElement, ReactNode } from 'react';
import { NavigationItems, NavigationItemsProps } from './navigation-menu';
import { TextLink, TextLinkProps } from './link';

export type HeaderProps = {
  logo: ReactElement<SVGSVGElement>;
  navigationItems: NavigationItemsProps;
  actionLinks: TextLinkProps[];
};
export const Header = ({ navigationItems, logo, actionLinks }: HeaderProps) => {
  return (
    <header className='flex justify-center p-6 py-4 absolute top-0 right-0 left-0 bg-white shadow-sm border-b-2 border-black'>
      <div className='flex w-full items-center justify-between max-w-[1080px] gap-8'>
        {logo}

        <NavigationItems {...navigationItems} />

        <div className='gap-4 flex'>
          {actionLinks.map(({ children, size, target, url, variant }) => (
            <TextLink url={url} size={size} target={target} variant={variant} key={url}>
              {children}
            </TextLink>
          ))}
        </div>
      </div>
    </header>
  );
};
