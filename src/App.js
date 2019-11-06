import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component,Suspense, lazy } from 'react';
//import logo from './logo.svg';
import './App.css';


//import Link from 'react-router-dom/Link';
//import Switch from 'react-router-dom/Switch';
//import Route from 'react-router-dom/Route';
/*import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';*/

const Login = lazy(() => import('./components/Login'));
const Logout = lazy(() => import('./components/Logout'));
const Admin = lazy(() => import('./components/Admin'));


class App extends Component{
  render(){
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/logout" component={Logout}/>
              <Route exact path="/admin" component={Admin}/>
            </Switch>
          </Suspense>
      </Router>
    )
  }
}


export default App;
