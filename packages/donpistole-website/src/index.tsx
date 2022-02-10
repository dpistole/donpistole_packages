import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@cranburi/app-react';
import { donpistoleTheme } from './theme';

// import favicon
import './assets/images/favicon.ico';
import FontStyles from './styles/fonts';

import { App } from './apps/2022';

const store = createStore(combineReducers({}), composeWithDevTools());

const Main = (): JSX.Element => (
  <>
    <FontStyles />
    <GlobalStyles />
    <ThemeProvider theme={donpistoleTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>
);

ReactDOM.render(<Main />, document.getElementById('root'));
