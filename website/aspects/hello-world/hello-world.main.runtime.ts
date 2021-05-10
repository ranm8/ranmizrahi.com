import { MainRuntime } from '@teambit/cli';
import { HelloWorldAspect } from './hello-world.aspect';

export class HelloWorldMain {

  helloWorld() {

  }

  static slots = [];
  static dependencies = [];
  static runtime = MainRuntime;
  
  static async provider() {
    return new HelloWorldMain();
  }
}

HelloWorldAspect.addRuntime(HelloWorldMain);
