import React, { Component } from 'react'
import styled from 'styled-components'
import Coach from '../../assets/coachs-2.jpg'

const Container = styled.div`
display: flex;
padding: 0px 20px;
padding-bottom: 50px;
@media only screen and (max-width:480px){
        flex-direction: column;
        text-align: center;
    }


`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: center;
@media only screen and (max-width:480px){
        width:100%;
    }
`
const Heading = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color:#4169e1;
`

const Description = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
    line-height: 150%;

`
const Image = styled.img`
    height: 400px;
    width: 640px;
    padding: 50px;
    padding-top: 100px;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ReadMoreBtn = styled.button`
    width:150px;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: darkblue;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
`

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
        <Heading>About Us </Heading>
        <Description>Motivcenter is a workplace environment transformation company based in Maputo, Mozambique. We’ve been working regionally in the field of Motivation, Team Building and Sales Excellence for close to a decade, across all industry sectors. Our complementary areas of expertise are Leadership Training and Speaker Development.
        We transform workplaces into performance powerhouses. In any organization, the greatest untapped resource and the most expensive is its people. The greatest potential for growth, productivity, performance, achievement, and profitability lies within the skills and abilities of the average person. Motivcenter works with your team to unleash this potential found in everyone within the team. We tear down barriers that exist among team members impeding the smooth flow of work processes.
        </Description>
        <ButtonContainer>

        <ReadMoreBtn >Read More</ReadMoreBtn>
        </ButtonContainer>
        </Wrapper>
        <Image src={Coach} />
      </Container>
    )
  }
}