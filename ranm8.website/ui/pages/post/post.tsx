import React from 'react';
import { MDXLayout } from '@teambit/ui.mdx-layout';

export type PostProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Post({ text }: PostProps) {
  return (
    <MDXLayout>
      {text}
    </MDXLayout>
  );
}
