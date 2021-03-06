import React from 'react';
import { render } from '@testing-library/react';
import { BasicAbout } from './about.composition';

describe('about', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAbout />);
    const rendered = getByText('Hello my name is Ran');
    expect(rendered).toBeTruthy();
  });
});
