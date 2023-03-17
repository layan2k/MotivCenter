import React from 'react'
import styled from 'styled-components'
import App from "../../assets/Book3.png"


const Container = styled.div`
    display: flex;
    padding: 0px 20px;
    @media only screen and (max-width:480px){
        flex-direction:column;
        padding: 30px 20px;
        text-align: center;
        @media only screen and (max-width:480px){
        text-align: justify;
    }
    }
    @media only screen and (max-width:776px){
    flex-direction:column;;
    padding: 30px 20px;
    align-items: center;
    justify-content: center;
    }

    @media only screen and (max-width:1024px){
    background-size: 100% 100%;
    padding: 25px 20px;
    }

`
const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    @media only screen and (max-width:480px){
    width: 100%;
    }
    @media only screen and (max-width:776px){
    justify-content: center;
    }
        @media only screen and (max-width:1024px){
    justify-content: center;
    }

`
const Image = styled.img`
width: 300px;
height: 450px;
margin-left: 30px;
@media only screen and (max-width:1024px){
    margin-left: 0;
    }
@media only screen and (max-width:480px){
    margin-left: 0;
    }

`
const Right = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width:776px){
        margin-top: 10px;
        text-align: center;
        width:100%;
        justify-content: center;
        align-items: center;
    }
        @media only screen and (max-width:480px){
        width:100%;
        justify-content: center;
        align-items: center;
    }

`
const Title = styled.span`
    font-size: 50px;
    font-weight: 600;
    color: #1D1F22;
    @media only screen and (max-width:480px){
        font-size:30px;
    }
    @media only screen and (max-width:776px){
        font-size:40px;
    }
`
const SuTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #1D1F22;
    margin-top: 30px;

`
const Desc = styled.p`
    font-size: 20px;
    color: #1D1F22;
    margin-top: 30px;
`

const Button = styled.button`
    width: 160px;
    border: none;
    padding: 15px 30px;
    color: white;
    background-color: darkblue;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
`

const Feature = () => {
    return (
        <Container>
            <Left><Image src={App} /></Left>
            <Right>
                <Title>
                    THE PHARAOH MODEL OF LEADERSHIP
                </Title>
                <SuTitle>This ultimate leadership model gives a new definition to what it truly means to be successful.</SuTitle>
                <Desc>The Pharoah model of leadership is based upon 34 lessons and principles that reinforce the idea of developing your people by providing them with a loving environment.
                </Desc>
                <Desc>Learn how to make your team work together to accomplish great things.</Desc>
                <Button>BUY NOW</Button>
            </Right>
        </Container>
    )
}

export default Feature