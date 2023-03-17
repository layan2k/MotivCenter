import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BackToTop from './components/BackTop'
import BusinessFooter from './components/Footer2'
import MobileMenu from './components/MobileMenu'
import Navbar from './components/Navbar'
import LogoImg from './assets/Logo1.png'
import HamMenu from './assets/menu-burger.svg'

const Menu = styled.div`
      @media only screen and (max-width:776px){
        display: none;
    }
`

const Mobile = styled.div`
  display: none;

      @media only screen and (max-width:776px){
        display: flex;
        justify-content: space-between;
        height: 44px;
        padding: 20px 10px;
    }
`

const Left = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

`
const Logo = styled.img`
height: 50px;
width: 100px;
`
const MenuIcon = styled.img`
  height: 40px;
  width: 40px;
`

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Menu>
        <Navbar />
      </Menu >
      <Mobile>
        <Left to='/'>
          <Logo src={LogoImg} />
        </Left>
        <MenuIcon src={HamMenu} onClick={handleMenuOpen} />
        <MobileMenu isOpen={menuOpen} onClose={handleMenuClose} />
        <MobileMenu />
      </Mobile>
      <Outlet />
      <BackToTop />
      <BusinessFooter />
    </div>
  )
}

export default Layout