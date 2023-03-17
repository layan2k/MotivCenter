import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 padding: 20px;
 -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    max-width: 260px;
    min-height: 400px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
    }
    @media only screen and (max-width:480px){
        margin-right:0 ;
        margin-bottom: 10px;
        padding: 10px;
    }
        @media only screen and (max-width:776px){
        margin-right:0 ;
        padding: 10px;
    }
        @media only screen and (max-width:1024px){
        margin-right:0 ;
        padding: 10px;
    }

`
const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4169e1;
    font-weight: 400;
`
const Price = styled.span`
    font-weight: bold;
    font-size:20px ;
    @media only screen and (max-width:480px){
        font-size:30px;
    }
`
const ServiceIcon = styled.img`
    width: 120px;
    height: 120px;
    padding: 20px 0;
    color: darkblue;
`

const Description = styled.p`
margin-top: 20px;
line-height: 3;
text-align: center;
color: #a8a8a8;
height: 180px;
`

const Button = styled.button`
    padding: 15px 20px;
    margin: 10px 0px;
    border:none;
    border-radius: 5px;
    color: white;
    background-color: darkblue;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    @media only screen and (max-width:480px){
        padding: 10px 15px;
    }
`

const ServiceCard = ({ name, info, link }) => {
    return (
        <Container>
            <PriceContainer>
                <ServiceIcon src={link} />
                <Price>{name}</Price>
            </PriceContainer>
            <Description>
                {info}
            </Description>
            <Button>Learn More</Button>

        </Container>
    )
}

export default ServiceCard