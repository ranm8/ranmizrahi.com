import { MainRuntime } from '@teambit/cli';
import { RanmizrahiAspect } from './ranmizrahi.aspect';

export class RanmizrahiMain {
  static slots = [];
  static dependencies = [];
  static runtime = MainRuntime;
  static async provider() {
    return new RanmizrahiMain();
  }
}

RanmizrahiAspect.addRuntime(RanmizrahiMain);
