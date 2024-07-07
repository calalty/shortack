import Link from "next/link";
import { Button, ButtonVariantProps } from "./button";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export type TextLinkProps = {
  children?: ReactNode;
  url?: string;
  target?: HTMLAttributeAnchorTarget;
} & ButtonVariantProps;

export const TextLink = ({
  size,
  variant,
  children,
  url,
  target,
}: TextLinkProps) => {
  if (!url) return;

  return (
    <Button size={size} variant={variant} asChild>
      <Link target={target} href={url}>
        {children}
      </Link>
    </Button>
  );
};
