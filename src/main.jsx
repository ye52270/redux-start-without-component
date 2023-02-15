import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxContextProvider from './provider/ReduxContextProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxContextProvider>
    <App />
  </ReduxContextProvider>
);
