import React from 'react';

export type AboutProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function About({ text }: AboutProps) {
  return (
    <div>
      {text}
    </div>
  );
}
