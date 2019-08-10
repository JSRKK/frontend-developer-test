import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';
const history = new createBrowserHistory();

const AppWithRouter = () => (
    <Router history={history}>
        <App />
    </Router>
);

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
