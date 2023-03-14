import React, {useState} from 'react'
import styled from 'styled-components'
import Backg from '../assets/low-poly-grid-haikei.svg'
import axios from 'axios';


const Container = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg}) ;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Form = styled.form`
    width: 200px;
    height: 250px;
    padding: 50px;
    background: white;
    margin-top: 150px;
    border-radius:30px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    color: teal;
`
const TextBox = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: white;
    border: 1px solid royalblue;
    width: max-content;
    color: royalblue;
    &:hover{
        background-color: royalblue;
        color: white;
        border: none;
    }
`
const ErrorText = styled.p`
    color: red;
`

const Adminlogin = () => {
    const [inputs, setinputs] = useState({
        username: "",
        password: "",
    });

    const HandleChange = e => {
        setinputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const HandleClick = () => {
        axios.post('/login', inputs)
        .then((response) => {
          // Handle successful login
        })
        .catch((error) => {
          // Handle login error
        });
    }
  return (
    <>
    <Container bg={Backg}>
        <Form>
            <Title><strong>Login</strong></Title>
            <TextBox required placeholder='Username' name='username' type="text" onChange={HandleChange}></TextBox>
            <TextBox required placeholder='Password' name='password' type="password" onChange={HandleChange}></TextBox>
            <Button onClick={HandleClick}>Login</Button>
            <ErrorText>This is an Error</ErrorText>
        </Form>
    </Container>
    </>
  )
}

export default Adminlogin