import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DatePicker } from 'antd';

ReactDOM.render(<DatePicker />, document.getElementById('root'));
registerServiceWorker();
