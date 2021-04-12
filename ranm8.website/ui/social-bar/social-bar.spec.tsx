import React from 'react';
import { render } from '@testing-library/react';
import { BasicSocialBar } from './social-bar.composition';

describe('social-bar', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSocialBar />);
    const rendered = getByText('hello from SocialBar');
    expect(rendered).toBeTruthy();
  });
});
