import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ScrollToTop from '../utils/ScrollToTop'
import Nav from './Nav'
import Home from './Home'
import Page from './Page'
import Footer from './Footer'
import Config from '../content/config.yaml'
 
import '../style/app.scss';

const baseHref = Config.homepage.includes('/', 0) ? `/${Config.homepage}/` : `/${Config.homepage}`
console.log(baseHref)

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
    <div className="app">
      <Nav navItems={Config.sections} baseHref={baseHref} />
      <Switch>
        <Route exact path={baseHref} render={(props) => (<Home content={Config} />)} />
        <Route path={`${baseHref}:page`} render={(props) => (<Page content={Config.sections} page={props.match.params.page} />)} />
      </Switch>
      <Footer info={Config}/>
    </div>
    </ScrollToTop>
  </BrowserRouter>
)

export default App