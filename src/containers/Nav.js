import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../style/svg/compass.svg'

const Nav = (props) => {
  let link;
  let headingClass;
  return (
    <nav>
      <Link to={'/'}><img className="logo" src={logo} alt="props.title"/></Link>
      <ul>
      {props.navItems.map((item, i) => {
        if (item.slug) {
          link = <NavLink exact to={item.slug}>{item.title}</NavLink>
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
};

export const Subnav = (props) => {
  return (
    <ul className="sub-nav">
    {props.items.map((item, i) => {
      return (
        <li key={i}><NavLink exact to={item.slug ? item.slug : ''}>{item.title}</NavLink></li>
      )
    })}
    </ul>
  )
}

export default Nav
