import { ReactElement } from 'react';
import { NavigationItems, NavigationItemsProps } from './navigation-menu';
import { Button, ButtonProps } from './button';

export type HeaderProps = {
  logo: ReactElement<SVGSVGElement>;
  navigationItems: NavigationItemsProps;
  actionLinks: ButtonProps[];
  menu?: ReactElement<SVGSVGElement>;
  reducedHeader?: boolean;
};
export const Header = ({
  navigationItems,
  logo,
  actionLinks,
  menu,
  reducedHeader
}: HeaderProps) => {
  return (
    <header
      className={`flex mx-auto p-6 py-4 top-0 right-0 left-0 absolute z-[999] justify-center ${reducedHeader && 'border-secondary py-6'}`}
    >
      <div className='flex w-full items-center justify-between max-w-[90rem] gap-8'>
        {logo}

        {!reducedHeader && (
          <>
            {menu}
            <div className='md:contents hidden'>
              <NavigationItems {...navigationItems} />
              <div className='gap-4 flex'>
                {actionLinks.map(({ children, size, onClick, variant, className }) => (
                  <Button
                    className={className}
                    onClick={onClick}
                    size={size}
                    variant={variant}
                    key={children?.toString()}
                  >
                    {children}
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
