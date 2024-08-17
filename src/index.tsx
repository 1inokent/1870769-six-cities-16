import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import 'leaflet/dist/leaflet.css';

import App from './components/app/app';
import { store } from './store';

import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offerCardCount={Setting.offerCardCount}
      />
    </Provider>
  </React.StrictMode>
);
