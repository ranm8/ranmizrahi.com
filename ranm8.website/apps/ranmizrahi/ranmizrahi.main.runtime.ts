import { MainRuntime } from '@teambit/cli';
import { ReactMain, ReactAspect } from '@teambit/react';
import { RanmizrahiAspect } from './ranmizrahi.aspect';

export class RanmizrahiMain {
  static slots = [];
  static dependencies = [ReactAspect];
  static runtime = MainRuntime;
  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'ranmizrahi.com',
      runEntry: [require.resolve('./ranmizrahi.app-root')],
      buildEntry: [require.resolve('./ranmizrahi.app-root')]
    })
    return new RanmizrahiMain();
  }
}

RanmizrahiAspect.addRuntime(RanmizrahiMain);
