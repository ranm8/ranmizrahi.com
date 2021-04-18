import React from 'react';
import { MemoryRouter } from 'react-router';
import { Header } from './header';

export const BasicHeader = () => {
  return (
    <MemoryRouter>
      <Header title="Someone's blog" description="Thoughts on architecture and design" />
    </MemoryRouter>
  );
} 
