import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import slugify from '../utils/slugify'
import logo from '../style/svg/compass.svg'

const Nav = (props) => {
  return (
    <nav>
      <Link to={'/'}><img className="logo" src={logo} alt="props.title"/></Link>
      <ul>
      {props.navItems.map((item, i) => {
        return (
          <li>
            <NavLink key={i} exact to={item.slug}>{item.title}</NavLink>
            {/* {Array.isArray(item.content) && <Subnav parent={item.slug} items={item.content}/>} */}
          </li>
        )
      })}
      </ul>
    </nav>
  )
};

export const Subnav = (props) => {
  return (
    <ul>
    {props.items.map((item, i) => {
      return (
        <li key={i}><a href={`${props.parent}#${slugify(item.title)}`}>{item.title}</a></li>
      )
    })}
    </ul>
  )
}

export default Nav
