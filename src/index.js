import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './assets/css/styles.css';
import {initStores} from './store/StoreInitializer';

initStores();

ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
