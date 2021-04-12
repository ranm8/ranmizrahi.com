import React from 'react';
import { render } from '@testing-library/react';
import { BasicNavBar } from './nav-bar.composition';

describe('nav-bar', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicNavBar />);
    const rendered = getByText('hello from NavBar');
    expect(rendered).toBeTruthy();
  });
});
