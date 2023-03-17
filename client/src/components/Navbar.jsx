import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import LogoImg from '../assets/Logo1.png'
import { SocialMedia } from '../data/SocialMedia'
import SocialMediaIcon from './Home/SocialMediaIcon'

const Container = styled.div`
    height:90px;
    `
const Wrapper = styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Logo = styled.img`
height: 50px;
width: 100px;
`

const Menu = styled.div`
    display: flex;
    gap: 10px;
    @media only screen and (max-width:776px){
        display: none;
    }
`
const Menuitem = styled.div`
    padding: 0px 10px;
    list-style: none;
    font-size: 16px;
`
const Button = styled.button`
    Border: 2px solid black;
    padding: 15px 30px;
    font-size: 16px;
    background-color: transparent;
    color: #1D1F22;
    font-weight:bold;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: darkblue ;
        color: white;
    }
`

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 5px;
`

const Navbar = () => {
    const Netws = SocialMedia
    return (
        <Container>
            <Wrapper>
                <Left><Logo src={LogoImg} />
                </Left>
                <Menu>

                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "LinkItem"
                    }>
                        <Menuitem>Home</Menuitem>
                    </NavLink >
                    <NavLink to='blog' className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "LinkItem"
                    }>
                        <Menuitem>Blog</Menuitem>
                    </NavLink>
                    <NavLink to='services' className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "LinkItem"
                    }>
                        <Menuitem>Services</Menuitem>
                    </NavLink>
                    <NavLink to='about' className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "LinkItem"
                    }>
                        <Menuitem>About</Menuitem>
                    </NavLink>
                    <NavLink to='contact' className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "LinkItem"
                    }>
                        <Menuitem>Contact</Menuitem>
                    </NavLink>
                </Menu>
                <Right>
                    <SocialMediaContainer>
                        {Netws.map(sicon => (
                            <SocialMediaIcon data={sicon} />
                        ))}
                    </SocialMediaContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar