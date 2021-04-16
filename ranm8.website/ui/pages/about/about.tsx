import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export type AboutProps = {
  children: ReactNode
};

export function About({ children }: AboutProps) {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {children}
    </div>
  );
}
