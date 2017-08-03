import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyCard from './MyCard.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyCard />, document.getElementById('card_dom'));
registerServiceWorker();
