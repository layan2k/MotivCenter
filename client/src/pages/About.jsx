import React, { useEffect } from 'react'
import styled from 'styled-components';
import Gallery from '../components/About/gallery';
import bgdsvg from '../assets/blurry-gradient-haikei.svg'
import hands from '../assets/hands.jpg'



const Header = styled.div`
  background-color: #2b2d42;
  padding: 50px 0;
  font-size: 36px;
  color: #fff;
  text-align: center;
  @media only screen and (max-width:480px){
    padding: 25px 0;
    }
`;

const Container = styled.div`
    display:flex;
    padding: 75px 20px;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
        padding: 20px 5px;
    }
    @media only screen and (max-width:1024px){
    padding: 30px 10px;
    flex-direction: column;
    }


`

const AboutContainer = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1{
    text-align: center;
    font-size: 40px;
    width: 95%;
  }
  h3{
    text-align: center;
    font-size: 17px;
  }
  p{
    text-align: justify;
    line-height:30px;
  }
  span{
    color: #8ba8ff;
    font-weight: 800;
    font-size: 20px;
  }
  @media only screen and (max-width:480px){
    h1{
      width: 100%;
    }
    padding: 0 10px;
    width: 100%;
    }
    @media only screen and (max-width:1024px){
      h1{
      width: 100%;
    }
    padding: 0 10px;
    width: 100%;
    }

`


const GalleryContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:480px){
    width: 100%;
    margin-bottom: 30px;
    }
    @media only screen and (max-width:1024px){
    width: 100%;
    margin-bottom: 30px;
    }


`

const SubHeader = styled.h3`
  font-size: 24px;
`

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

const MiddleInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  text-align: center;
  align-items: center;
  color: white;
  justify-content: center;
  background:  ${props=> props.backgroundpic? "linear-gradient(180deg, rgba(255 255 255 / 54%), rgba(65 105 255 / 100%))": "none"}, url(${props => props.backgroundpic? props.backgroundpic : "none" });
  background-size: cover;
  h3{
    width: 55%;
    font-size: 24px;
  }
  p{
    width: 55%;
    font-size: 17px;
    line-height:30px;
  }
  @media only screen and (max-width:480px){
    background:  ${props=> props.backgroundpic? "linear-gradient(rgba(255 255 255 / 54%), rgba(65 105 255 / 100%))": "none"}, url(${props => props.backgroundpic? props.backgroundpic : "none" });
        padding: 30px 5;
        h3{
          width: 100%;
        }
        p{
          width: 100%;
        }
    }
    @media only screen and (max-width:1024px){
        padding: 50px 10;
        h3{
          width: 100%;
        }
        p{
          width: 100%;
        }
    }

`


const LastInfo = styled.div`
  display: flex;
  padding: 75px 20px;
  align-items: center;
  justify-content: center;
  color: white;
  background: url(${props => props.bgcolor});
  background-size: cover;
  margin-bottom: 100px;
  @media only screen and (max-width:480px){
    padding: 20px 5px;
    margin-bottom: 70px;
    flex-direction: column;
    }
    @media only screen and (max-width:1024px){
    padding: 20px 10px;
    margin-bottom: 70px;
    flex-direction: column;
    }


`

const LeftImage = styled.img `
  height: 280px;
  width: 350px;
  @media only screen and (max-width:480px){
    width: 100%;
    }
    @media only screen and (max-width:1024px){
    width: 100%;
    height: 400px;
    }

`

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  h3{
    font-size: 28px;
  }
  p{
    font-size: 17px;
    width: 65%;
  }
  @media only screen and (max-width:480px){
    width: 100%;
    p {
      width: 100%;
    }
    }
    @media only screen and (max-width:1024px){
    width: 100%;
    p {
      width: 100%;
    }
    }

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

      <SubHeader>Transforming workplaces into performance powerhouses</SubHeader>
      <p>In any organization, the greatest untapped resource and the most expensive is its people.
        The greatest potential for growth, productivity, performance, achievement, and profitability lies within the skills and abilities of the average person. Motivcenter works with your team to unleash this potential found in each and everyone within the team. We tear down barriers that exist among team members impeding the smooth flow of work processes.</p>
        <Button>Contact</Button>

  </AboutContainer>
  <GalleryContainer>
  <Gallery />
  </GalleryContainer>
  </Container>
  <MiddleInfo backgroundpic={hands}>
    <h3>
    We specialize in getting people and businesses to better than they were yesterday. We work tirelessly to create stronger people, teams, and businesses.
    </h3>
    <p>We mix motivation, training, inhouse and outdoor activities to bring out the potential that teams have and identify ways to harness them. We blend this with action learning, supporting the journey of behavioural change as your people adopt new mindsets and behaviours. Our programmes are mentally and emotionally engaging providing experiential and interactive, robust models and frameworks that leave time for reflection. However, more than anything we believe in offering a practical, pragmatic and real-world perspective that gets to the heart of what matters and helps find actionable answers.</p>
  </MiddleInfo>
  <LastInfo bgcolor={bgdsvg}>
    <LeftImage src="https://picsum.photos/803/400"/>
    <DetailInfo>
      <h3>Breaking Down Barriers</h3>
      <p>We create environments where everyone feels the necessity of being vulnerable and be willing to break down barriers that may exist among them impeding real connection in the team. Our focus is to reveal the value of your people, showing them the potential that they have whilst challenging them to increase their individual value. We work with them to eliminate behaviors that create disconnection in the team learning to improve communication among themselves and with clients leading to a better organization.</p>
    </DetailInfo>
  </LastInfo>
  </>
  )
}

export default AboutPage