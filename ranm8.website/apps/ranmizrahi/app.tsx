import React from 'react';
import { Homepage } from '@ranm8/website.ui.pages.homepage';
import { About } from '@ranm8/website.ui.pages.about';
import { Header } from '@ranm8/website.ui.header';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '@teambit/design.theme.theme-context';
import { Switch, Route } from 'react-router';

export function RanMizrahiApp() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Header 
          title="Ran's blog" 
          description="Thoughts on innovation, engineering and architecture"
        />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>        
          <Route path="/about">
            <About>about page</About>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext>
  );
}
