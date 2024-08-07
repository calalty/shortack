import * as React from 'react';

import { cn } from '@/lib/utils';

const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
      {...props}
    />
  )
);
CardRoot.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export type CardProps = {
  content: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  description?: string;
  additionalClassNames?: {
    root?: string;
    header?: string;
    title?: string;
    description?: string;
    content?: string;
    footer?: string;
  };
};

const Card = ({ content, footer, additionalClassNames, description, title }: CardProps) => (
  <CardRoot className={additionalClassNames?.root}>
    {title && (
      <CardHeader className={additionalClassNames?.header}>
        <CardTitle className={additionalClassNames?.title}>{title}</CardTitle>
        {description && (
          <CardDescription className={additionalClassNames?.description}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
    )}
    <CardContent className={additionalClassNames?.content}>{content}</CardContent>
    {footer && <CardFooter className={additionalClassNames?.footer}>{footer}</CardFooter>}
  </CardRoot>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
