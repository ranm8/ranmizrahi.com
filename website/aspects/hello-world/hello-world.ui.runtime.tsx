import React, { useContext } from 'react';
import { UIRuntime } from '@teambit/ui';
import { ComponentUI, ComponentAspect, ComponentContext } from '@teambit/component';
import { HelloWorldAspect } from './hello-world.aspect';

export class HelloWorldUI {

  helloWorld() {

  }

  static slots = [];
  static runtime = UIRuntime;
  static dependencies = [ComponentAspect];
  
  static async provider([component]: [ComponentUI]) {
    component.registerRoute({
      children: () => {
        return <div>hello world</div>;
      },
      path: '~hello'
    })

    component.registerNavigation({
      href: '~hello',
      children: 'Hello'
    }, 100);
    
    return new HelloWorldUI();
  }
}

HelloWorldAspect.addRuntime(HelloWorldUI);
