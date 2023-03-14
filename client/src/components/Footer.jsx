import React from 'react'
import styled from 'styled-components'
import LogoImg from'../assets/Logo1.png'
import Bg from '../assets/footerwaves.svg'
import { SocialMedia } from '../data/SocialMedia'
import SocialMediaIcon from './Home/SocialMediaIcon'

const Container = styled.div`
  height: 100px ;
  background-color: #4169e1;
  object-fit: cover;
  color: white;
  padding: 0px 70px;
  @media only screen and (max-width:480px){
    padding: 0;
    height: auto;
    }

`
const Wrapper = styled.div`
  display  :flex ;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  @media only screen and (max-width:480px){
        padding: 10px;
        flex-direction: column;
    }
`
const Logo = styled.img`
height: 50px;
width: 100px;
`
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`
const ListItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width:480px){
        margin-right: 10px;
        font-size: 14px;
    }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
`
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 7px;
  padding-top: 20px;
`
const Copyright = styled.span`
  padding-right: 15px;
  margin-top: 10px;
  @media only screen and (max-width:480px){
        font-size:14px;
        padding-right: 0;
    }
`

const Footer = () => {
  const currentDate = new Date()
  const Netws = SocialMedia
  return (
    <Container bg={Bg}>
      <Wrapper>
        <Logo src={LogoImg} />
        <List>
          <ListItem>Blog</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>About </ListItem>
          <ListItem>Contact</ListItem>
        </List>
        <Right>
          <SocialMediaContainer>
            {Netws.map(sicon =>(
            <SocialMediaIcon data={sicon}/>
            ))}

          </SocialMediaContainer>
        <Copyright>&copy; MotivCenter {currentDate.getFullYear()}</Copyright>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer