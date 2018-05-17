import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/root';
import configureStore from './configure-store';

import './app.scss';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
