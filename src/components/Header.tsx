import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

import './Header.scss'

const Header = () => (
  <Navbar className='header-component'>
    <div className='container'>
      <NavbarBrand href='/'>Nafnaleit</NavbarBrand>
    </div>
  </Navbar>
)

export default Header
