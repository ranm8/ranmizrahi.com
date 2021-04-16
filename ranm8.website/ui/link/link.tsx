import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps as BaseLinkProps } from '@teambit/ui.react-router.link';
import styles from './link.module.scss';

export type LinkProps = {
  children: ReactNode
} & BaseLinkProps;

export function Link({ children, className, ...rest }: LinkProps) {
  return <BaseLink className={classNames(className, styles.link)} {...rest}>{children}</BaseLink>;
}
