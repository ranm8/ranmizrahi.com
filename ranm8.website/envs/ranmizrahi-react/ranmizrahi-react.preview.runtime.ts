import React, { ReactNode } from 'react';
import { GraphqlUI, GraphqlAspect } from '@teambit/graphql';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeContext } from '@teambit/design.theme.theme-context';
import { MemoryRouter } from 'react-router';
import { RanmizrahiReactAspect } from './ranmizrahi-react.aspect';

export class SymphonyReactPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview, GraphqlUI]) {
    const symphonyReactPreview = new SymphonyReactPreview();
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([ThemeContext, MemoryRouter]);

    return symphonyReactPreview;
  }
}

RanmizrahiReactAspect.addRuntime(SymphonyReactPreview);
