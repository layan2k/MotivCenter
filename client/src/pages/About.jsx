import React, { useEffect } from 'react'
import styled from 'styled-components';
import Gallery from '../components/About/gallery';


const Header = styled.div`
  background-color: #2b2d42;
  padding: 50px 0;
  font-size: 36px;
  color: #fff;
  text-align: center;
`;

const Container = styled.div`
    display:flex;
    padding: 50px 20px;
    justify-content: center;
    align-items: center;
`

const AboutContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  h1{
    text-align: center;
    font-size: 40px
  }
  h3{
    text-align: center;
  }
  p{
    text-align: justify;


  }
`

const StyledImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 10px #ccc;
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  background-color: darkblue;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

`



const AboutPage = (props) => {
  useEffect(() => {
    const SetTitle = async () =>{
      document.title = `${await props.title} - MotivCenter`
    }
    SetTitle()
  }, [])
  return (
    <>
    <Header>About Us</Header>
    <Container>
    <AboutContainer>
        <h1>Who we are</h1>
      <p><span>Motivcenter </span>is a workplace environment transformation company based in Maputo, Mozambique.
      We’ve been working regionally in the field of Motivation, Team Building and Sales Excellence for close to a decade, across all industry sectors.
      Our complementary areas of expertise are Leadership Training and Speaker Development.<br/> We specialize in getting people and businesses to better than they were yesterday. We work tirelessly to create stronger people, teams, and businesses.</p>

      <h3>Transforming workplaces into performance powerhouses</h3>
      <p>In any organization, the greatest untapped resource and the most expensive is its people.
        The greatest potential for growth, productivity, performance, achievement, and profitability lies within the skills and abilities of the average person. Motivcenter works with your team to unleash this potential found in each and everyone within the team. We tear down barriers that exist among team members impeding the smooth flow of work processes.</p>
        <Button>Contact</Button>

  </AboutContainer>
  <Gallery />
  </Container>
  </>
  )
}

export default AboutPage