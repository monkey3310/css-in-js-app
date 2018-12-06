import React from 'react';
import { render } from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Aphrodite from './scenes/Aphrodite';

import ReactJss from './scenes/ReactJss';

import Fela from './scenes/Fela';

import StyledComponents from './scenes/StyledComponents';

import Menu from './components/Menu';

import './index.css';
import './probe.css';

render(
  <div>
    <Menu />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Aphrodite} />
        <Route exact path="/aphrodite" component={Aphrodite} />
        <Route exact path="/react-jss" component={ReactJss} />
        <Route exact path="/react-fela" component={Fela} />
        <Route exact path="/styled-components" component={StyledComponents} />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById('root')
);
