import React from 'react';
import ReactDOM from 'react-dom';
import { Homepage } from '@ranm8/website.ui.pages.homepage';
import { About } from '@ranm8/website.ui.pages.about';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '@teambit/design.theme.theme-context';
import { Switch, Route } from 'react-router';

ReactDOM.render((
  <ThemeContext>
    <BrowserRouter>
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
), document.getElementById('root'));
