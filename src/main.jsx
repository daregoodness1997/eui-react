import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiProvider } from '@elastic/eui';

ReactDOM.createRoot(document.getElementById('root')).render(
  <EuiProvider colorMode='dark'>
    <App />
  </EuiProvider>
);
