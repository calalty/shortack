import { Card, CardProps } from '@/components/ui/card';
import { TextLink, TextLinkProps } from '@/components/ui/link';
import React, { ReactNode } from 'react';

export type ChecklistItem = {
  icon: ReactNode;
  label: string;
};

export type FooterButtonProps = {
  className: string;
  variant: TextLinkProps['variant'];
  size: TextLinkProps['size'];
  url: string;
  icon?: ReactNode;
  label: string;
};

export type FooterDescriptionProps = {
  text: string;
  className: string;
};

export type PricingCardProps = {
  title: string;
  price?: string;
  checklist: {
    className: string;
    items: ChecklistItem[];
  };
  footer?: {
    description?: FooterDescriptionProps;
    button: FooterButtonProps;
  };
  additionalClassNames?: CardProps['additionalClassNames'];
};

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  checklist,
  footer,
  additionalClassNames
}) => {
  return (
    <Card
      additionalClassNames={additionalClassNames}
      content={
        <ul>
          {checklist.items.map(({ label, icon }) => (
            <li className={checklist.className} key={label}>
              {icon} <span>{label}</span>
            </li>
          ))}
        </ul>
      }
      title={title}
      description={price}
      footer={
        footer && (
          <div className='flex flex-col text-center justify-center gap-2 w-full'>
            {footer.button && (
              <TextLink
                className={footer.button.className}
                variant={footer.button.variant}
                size={footer.button.size}
                url={footer.button.url}
              >
                {footer.button.icon} {footer.button.label}
              </TextLink>
            )}
            {footer.description && (
              <p className={footer.description.className}>{footer.description.text}</p>
            )}
          </div>
        )
      }
    />
  );
};
