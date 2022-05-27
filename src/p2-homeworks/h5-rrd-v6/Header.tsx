import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {

  return (
    <div className={s.dropdown}>
      <button className={s.dropbtn}>Pages</button>
      <div className={s.dropdownContent}>
        <NavLink to={'/pre-junior'}>Pre-junior</NavLink>
        <NavLink to={'/junior'}>Junior</NavLink>
        <NavLink to={'/juniorPlus'}>Junior+</NavLink>
      </div>
    </div>

  )
}

export default Header
