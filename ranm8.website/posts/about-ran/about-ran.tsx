import React from 'react';
import { About } from '@ranm8/website.ui.pages.about';
import { default as AboutRanContent } from './about-ran.mdx';
import { MDXLayout } from '@teambit/ui.mdx-layout';

export function AboutRan() {
  return (
    <About>
      <MDXLayout>
        <AboutRanContent />
      </MDXLayout>
    </About>
  );
}
