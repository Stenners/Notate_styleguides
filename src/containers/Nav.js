import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../style/svg/nlogo2.svg'

let link
let headingClass
let activeClass

class Nav extends React.Component {

  componentWillUpdate() {
    activeClass = this.props.state ? 'active' : ''
  }

  render() {
    return (
      <nav className={activeClass}>
        <Link to={this.props.baseHref}><img className="logo" src={logo} alt="this.props.title"/></Link>
        <ul>
          {this.props.navItems.map((item, i) => {
            if (item.slug) {
              link = <NavLink exact to={`${this.props.baseHref}${item.slug}`}>{item.title}</NavLink>
              headingClass='';
            } else {
              link = item.title ? <div>{item.title}</div> : <div>{item.heading}</div>;
              headingClass='heading';
            }
            return (
              <li key={i} className={headingClass}>
                {link}
                {Array.isArray(item.subSections) && <Subnav parent={item.slug} items={item.subSections}/>}
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export const Subnav = (props) => {
  return (
    <ul className="sub-nav">
    {this.props.items.map((item, i) => {
      return (
        <li key={i}><NavLink exact to={item.slug ? item.slug : ''}>{item.title}</NavLink></li>
      )
    })}
    </ul>
  )
}

export default Nav
