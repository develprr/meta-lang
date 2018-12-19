import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './assets/css/styles.css';
import {initStores} from './stores/StoreInitializer';

initStores();

ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
