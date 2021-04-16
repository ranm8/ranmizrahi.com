import React, { ReactNode } from 'react';

export type HeaderProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode,

  /**
   * class name to add to the header.
   */
  className?: string
};

export function Header({ children, className }: HeaderProps) {
  return (
    <header className={className}>
      {children}
    </header>
  );
}
