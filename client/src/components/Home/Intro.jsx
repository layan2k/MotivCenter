import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    color: #1D1F22;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        width:100%;
        height: 100%
    }

`
const Title = styled.h1`
    font-size: 50px;
    width:60%;
    font-weight: 800;
    @media only screen and (max-width:480px){
        width:100%;
        font-size: 50px;
    }
  `
const Description = styled.p`
    width:60%;
    font-size:25px;
    margin-top: 20px;
    font-weight: 600;
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }

`
const Button = styled.button`
    padding:15px 30px;
    background-color: darkblue;
    color:white;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        margin-bottom: 20px;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;

`
const Phone = styled.span`
    color: darkblue;
    font-weight: bold;
    @media only screen and (max-width:480px){
        color: #1D1F22;
    }
`

const ContactText = styled.span`
    color: #1D1F22;
    margin-top: 5px;
    @media only screen and (max-width:480px){
        color: black;
    }
`
const Right = styled.div`
    width: 40%;
`
const Image = styled.img`
    width: 100%;
    @media only screen and (max-width:480px){
        display: none;
    }
`

const Intro = () => {
  return (
    <Container>
      <Left><Title>
      Your Success is Our Commitment
        </Title>
        <Description>
        We believe in the power of motivated individuals to enhance your work environment.
        </Description>
        <Info>
          <Button>LEARN MORE</Button>
          <Contact>
            <Phone>
              Call Us +258 84 0396785
            </Phone>
            <ContactText>
              For any question or concern
            </ContactText>
          </Contact>

        </Info>
        </Left>
      <Right><Image></Image></Right>
    </Container>
  )
}

export default Intro
