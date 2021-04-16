import React from 'react';
import classNames from 'classnames';
import { Link } from '@ranm8/website.ui.link';
import styles from './nav-bar.module.scss';

export type NavBarProps = {
  className?: string;
};

export function NavBar({ className }: NavBarProps) {
  return (
    <ul className={classNames(className, styles.navbar)}>
      <li><Link href="/about">About</Link></li>
    </ul>
  );
}
