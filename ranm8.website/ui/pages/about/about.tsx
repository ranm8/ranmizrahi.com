import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { MDXLayout } from '@teambit/ui.mdx-layout';

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
      {/* <MDXLayout> */}
        {children}
      {/* </MDXLayout> */}
    </div>
  );
}
