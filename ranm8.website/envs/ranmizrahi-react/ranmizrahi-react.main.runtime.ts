import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { Aspect } from '@teambit/harmony';
import { RanmizrahiReactAspect } from './ranmizrahi-react.aspect';

export class RanmizrahiReactMain {
  static slots = [];
  static runtime = MainRuntime;
  
  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const ranReactEnv = envs.compose(react.reactEnv, []);
    envs.registerEnv(ranReactEnv);
    return new RanmizrahiReactMain();
  }
}

RanmizrahiReactAspect.addRuntime(RanmizrahiReactMain);
