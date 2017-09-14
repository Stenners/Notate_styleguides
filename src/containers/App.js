import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Page from './Page'
import Config from '../content/config.yaml'
 
import '../style/app.scss'; 

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Nav navItems={Config.sections} />
      <Switch>
        <Route exact path='/' render={(props) => (<Home content={Config} />)} />
        <Route path='/:page' render={(props) => (<Page content={Config.sections} page={props.match.params.page} />)} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App