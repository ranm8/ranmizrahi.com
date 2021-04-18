import React from 'react';
import { MemoryRouter } from 'react-router';
import { NavBar } from './nav-bar';

export const BasicNavBar = () => {
  return (
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
};
