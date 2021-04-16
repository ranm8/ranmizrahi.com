import React from 'react';
import { H1 } from '@teambit/design.ui.heading';
import { Header } from '@ranm8/website.ui.header';
import { text } from '@teambit/base-ui.layout.align';
import classNames from 'classnames';
import styles from './homepage.module.scss';

export type HomepageProps = {
  /**
   * a text to be rendered in the component.
   */
  path: string
};

export function Homepage({ path }: HomepageProps) {
  return (
    <Header className={classNames(styles.header, text.center)}>
      <H1 size={"xs"}>
        Ran's blog. 
        Thoughts on innovation, engineering and architecture.
      </H1>
    </Header>
  );
}

Homepage.defaultProps = {
  path: '/'
}
