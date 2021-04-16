import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Heading } from '@teambit/base-ui.text.heading';
import { Link } from '@ranm8/website.ui.link';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { NavBar } from '@ranm8/website.ui.nav-bar';
import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * header title
   */
  title: string;
   
  /**
   * description title
   */
  description?: string;

  /**
   * link title should point to.
   */
  link?: string;

  /**
   * class name to add to the root header element.
   */
  className?: string;
};

export function Header({ title, description, className, link }: HeaderProps) {
  return (
    <header className={classNames(className, styles.header)}>
      <Heading className={styles.title}>
        <Link href={link}>{title}</Link>
      </Heading>
      <Paragraph className={styles.description} element="span">{description}</Paragraph>
      <NavBar className={classNames(styles.navbar)} />
    </header>
  );
}

Header.defaultProps = {
  link: '/'
};
