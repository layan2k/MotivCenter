import React, { Component } from 'react'
import styled from 'styled-components'

import bgdsvg from '../../assets/blurry-gradient-haikei.svg'

const Container = styled.div`
    height: 100%;
    background: url(${props => props.bgcolor});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 50px 0;

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Heading = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-bottom: 50px;
    @media only screen and (max-width:480px){
        text-align: center;
    }

`

const FormContainer = styled.div``

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin-bottom: 30px;
    border-radius: 30px;
    border: none;
    height: 50px;
    padding: 0 10px;
    outline: none;
    @media only screen and (max-width:480px){
       text-align: center;
       font-size: 20px;
    }

`
const Button = styled.button`
    width:auto;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 20px;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        background-color: #8ba8ff;
    }
`

export default class Subscribe extends Component {
  render() {
    return (
      <Container bgcolor={bgdsvg}>
        <Wrapper>
            <Heading>Subscribe For Our Newsletter</Heading>
            <FormContainer>
                <Form>
                    <Input placeholder='Name'></Input>
                    <Input placeholder='Email'></Input>
                    <Button>Subscribe</Button>
                </Form>
            </FormContainer>
        </Wrapper>
      </Container>
    )
  }
}
