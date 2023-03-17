import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import Cross from '../assets/cross.svg'


const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Menuitem = styled.div`
    padding: 10px ;
    list-style: none;
    font-size: 1.5rem;
`

const CloseButton = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 30px;
`;

const MobileMenu = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return isOpen ? (
    <MenuContainer>
      <CloseButton src={Cross} onClick={handleClick} />
      <NavLink onClick={handleClick} to='/' className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "LinkItem"
      }>
        <Menuitem onClick={handleClick}>Home</Menuitem>
      </NavLink >
      <NavLink onClick={handleClick} to='blog' className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "LinkItem"
      }>
        <Menuitem>Blog</Menuitem>
      </NavLink>
      <NavLink onClick={handleClick} to='services' className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "LinkItem"
      }>
        <Menuitem onClick={handleClick}>Services</Menuitem>
      </NavLink>
      <NavLink onClick={handleClick} to='about' className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "LinkItem"
      }>
        <Menuitem onClick={handleClick}>About</Menuitem>
      </NavLink>
      <NavLink onClick={handleClick} to='contact' className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "LinkItem"
      }>
        <Menuitem onClick={handleClick}>Contact</Menuitem>
      </NavLink>
    </MenuContainer>
  ) : null;
};

export default MobileMenu;
