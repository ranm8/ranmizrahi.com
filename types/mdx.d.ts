import { ComponentType } from 'react';

declare module '*.mdx' {
  const component: ComponentType;
  export default component;
}
