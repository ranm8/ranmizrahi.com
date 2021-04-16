import React from 'react';

export type HomepageProps = {
  /**
   * a text to be rendered in the component.
   */
  path: string
};

export function Homepage({ path }: HomepageProps) {
  return (
    <div>homepage</div>
  );
}

Homepage.defaultProps = {
  path: '/'
}
