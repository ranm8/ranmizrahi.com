import React from 'react';

export type SocialBarProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function SocialBar({ text }: SocialBarProps) {
  return (
    <div>
      {text}
    </div>
  );
}
