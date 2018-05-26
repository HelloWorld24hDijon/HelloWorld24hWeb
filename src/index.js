import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/Authentification/login'
import Register from './component/Authentification/register';
import Events from './component/body/events';
import Informations from './component/body/informations';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/a-propos" component={Informations} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();


