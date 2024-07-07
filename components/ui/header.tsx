import { ReactElement, ReactNode } from "react";
import { NavigationItems, NavigationItemsProps } from "./navigation-menu";
import { TextLink, TextLinkProps } from "./link";

export type HeaderProps = {
  logo: ReactElement<SVGSVGElement>;
  navigationItems: NavigationItemsProps;
  actionLinks: TextLinkProps[];
};
export const Header = ({ navigationItems, logo, actionLinks }: HeaderProps) => {
  return (
    <header className="flex justify-center p-6">
      <div className="flex w-full items-center justify-between max-w-[1080px] gap-8">
        {logo}

        <NavigationItems {...navigationItems} />

        {actionLinks.map(({ children, size, target, url, variant }) => (
          <TextLink
            url={url}
            size={size}
            target={target}
            variant={variant}
            key={url}
          >
            {children}
          </TextLink>
        ))}
      </div>
    </header>
  );
};
