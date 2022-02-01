import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import { context as appContext, GlobalStyles } from '@cranburi/app-react';
import { donpistoleTheme } from './theme';

// load env vars
// import dotEnv from "dotenv";
// dotEnv.config();

// import favicon
import './assets/images/favicon.ico';
import FontStyles from './styles/fonts';

import { App } from './apps/2022';

const store = createStore(combineReducers({}), composeWithDevTools());

const appConfig = {
  api: {
    host: `${process.env.APP_API_HOST}`,
  },
};

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
