import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './Game.css';
import { setupStore } from './redux/setupStore';

ReactDOM.render(
    <Provider store={setupStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
