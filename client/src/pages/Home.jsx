import styled, { css } from 'styled-components';
import Contact from '../components/Home/Contact';
import Feature from '../components/Home/Feature';
import Intro from '../components/Home/Intro';
import ServiceItems from '../components/Home/ServicesItems';
import AboutOzias from '../components/Home/AboutOzias';
import AboutUs from '../components/Home/AboutUs';
import Subscribe from '../components/Home/Subscribe';
import BgC from '../assets/bg.jpg'
import { useEffect } from 'react';

const Container = styled.div`
background:  ${props => props.backgroundpic ? "linear-gradient(270deg, rgba(255 255 255 / 54%), rgba(65 105 255 / 100%))" : "none"}, url(${props => props.backgroundpic ? props.backgroundpic : "none"});
background-size: cover;
overflow: hidden;
position:relative;
padding: 50px 0;
width: 100%;
@media only screen and (max-width:480px){
  background-size: 100% 100%;
  padding: 30px 0;
    }
    @media only screen and (max-width:1024px){
  background-size: 100% 100%;
  padding: 30px 0;
    }

`
const Hero = styled.div`
background:  ${props => props.backgroundpic ? "linear-gradient(  rgba(255 255 255 / 54%), rgba(65 105 255 / 100%))" : "none"}, url(${props => props.backgroundpic ? props.backgroundpic : "none"});
background-size: cover;
overflow: hidden;
position:relative;
@media only screen and (max-width:480px){

    }
  @media only screen and (max-width:1024px){

    }

`

const Shape = css`
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
const FeatureShape = styled.div`
  ${Shape}
    clip-path: polygon(33% 0, 100% 0, 100% 100%, 33% 100%);
    background-color: #8ba8ff;
    @media only screen and (max-width:1024px){
    clip-path: none;
    background-size: 100% 100%;
    background-color: #8ba8ff;
    }

`
const PriceShape = styled.div`
  ${Shape}
    clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
    background-color: #8ba8ff;
    @media only screen and (max-width:1024px){
    clip-path: none;
    background-size: 100% 100%;
    background-color: #8ba8ff;
    }

`
const ServiceShape = styled.div`
  ${Shape}
    clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
    background-color: royalblue;
`


const Home = (props) => {
  useEffect(() => {
    const SetTitle = async () => {
      document.title = `${await props.title} - MotivCenter`
    }
    SetTitle()
  }, [props.ti])
  const smallScreen = window.screen.width <= 1024 ? true : false
  return (
    <>
      {/* NavBar + Intro */}
      <Hero backgroundpic={BgC}>
        <Intro />
      </Hero>
      {/* Book Ad */}
      <Container >
        <Feature />
        <FeatureShape />
      </Container>
      {/* About Ozias */}
      <Container>
        <AboutOzias />
        {smallScreen === false && <ServiceShape />}
      </Container>
      {/* Services */}
      <Container>
        <ServiceItems />
        <PriceShape />
      </Container>
      {/* About Us */}
      <Container >
        <AboutUs />
      </Container>
      {/* Subscribe Section */}
      <Container >
        <Subscribe />
      </Container>
      {/* Contact + Footer */}
      <Container  >
        <Contact />
      </Container>
    </>
  );
}

export default Home;
