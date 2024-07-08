import * as React from "react";

type WelcomeTemplateProps = {
  firstName: string;
};

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
