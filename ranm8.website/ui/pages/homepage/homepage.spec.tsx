import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomepage } from './homepage.composition';

describe('homepage', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicHomepage />);
    const rendered = getByText('hello from Homepage');
    expect(rendered).toBeTruthy();
  });
});
