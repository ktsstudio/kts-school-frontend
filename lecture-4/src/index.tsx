import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import App from './App';
import './styles/index.css';

import './utils/initMobX';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
