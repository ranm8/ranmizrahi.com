import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

describe('header', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicHeader />);
    const rendered = getByText('Hello from header');
    expect(rendered).toBeTruthy();
  });
});
