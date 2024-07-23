import Link from 'next/link';
import { Button, ButtonVariantProps } from './button';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type TextLinkProps = {
  className?: string;
  children?: ReactNode;
  url?: string;
  target?: HTMLAttributeAnchorTarget;
} & ButtonVariantProps;

export const TextLink = ({ size, variant, children, url, target, className }: TextLinkProps) => {
  if (!url) return;

  return (
    <Button className={className} size={size} variant={variant} asChild>
      <Link target={target} href={url}>
        {children}
      </Link>
    </Button>
  );
};
