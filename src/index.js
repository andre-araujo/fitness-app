import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

import store from './store';
import Home from './components/pages/Home';

function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

render(
    <App />,
    document.getElementById('root')
);
