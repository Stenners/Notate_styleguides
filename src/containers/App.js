import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ScrollToTop from '../utils/ScrollToTop'
import Nav from './Nav'
import NavMenu from '../components/NavMenu'
import Home from './Home'
import Page from './Page'
import Footer from './Footer'
import Config from '../content/config.yaml'
 
import '../style/app.scss';

const baseHref = Config.homepage.includes('/', 0) ? `/${Config.homepage}/` : `/${Config.homepage}`

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      menuState: true
    }
  }

  navClick() {
    this.setState({menuState: !this.state.menuState})
  }
  
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
        <div className="app">
          <NavMenu onClick={this.navClick.bind(this)}/>
          <Nav navItems={Config.sections} baseHref={baseHref} state={this.state.menuState} />
          <Switch>
            <Route exact path={baseHref} render={(props) => (<Home content={Config} />)} />
            <Route path={`${baseHref}:page`} render={(props) => (<Page content={Config.sections} page={props.match.params.page} />)} />
          </Switch>
          <Footer info={Config}/>
        </div>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
  
}

export default App