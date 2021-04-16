import React from 'react';
import { MemoryRouter } from 'react-router';
import { Link } from './link';

export const BasicLink = () => {
  return (
    <MemoryRouter>
      <Link href="/about">About</Link>
    </MemoryRouter>
  );
};
