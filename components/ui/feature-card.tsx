import { ReactNode } from 'react';
import { Card, CardProps } from './card';

export type FeatureCardProps = {
  title: {
    icon: ReactNode;
    value: string;
  };
  description: string;
  content: ReactNode;
  additionalClassNames?: CardProps['additionalClassNames'];
};

export const FeaturesCard = ({
  additionalClassNames,
  title,
  description,
  content
}: FeatureCardProps) => {
  return (
    <Card
      additionalClassNames={additionalClassNames}
      title={
        <>
          <span>{title.icon}</span>
          {title.value}
        </>
      }
      description={description}
      content={content}
    />
  );
};
