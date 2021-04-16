import React from 'react';

export type PostProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Post({ text }: PostProps) {
  return (
    <div>
      {text}
    </div>
  );
}
