import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux';
import {reducer} from './config/reducer';
import { Provider } from 'react-redux';

const str = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={str} >
      <App />
    </Provider>
);