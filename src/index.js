import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Start from './pages/Start';
import Docteur from './pages/docteur';

ReactDOM.render(
<BrowserRouter>

<Switch>
<Route component={App}/>
<Route  path = '/Start'><Start/></Route>
<Route  path = '/Docteur' component={Docteur}></Route>
</Switch>

</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
