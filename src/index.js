import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/Authentification/login'
import Events from './component/body/events'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/events" component={Events} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();


