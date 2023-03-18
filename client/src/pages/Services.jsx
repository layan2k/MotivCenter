import React, { useEffect } from 'react'
import styled from 'styled-components';
import { ServiceData } from '../data/services';
import { motion } from 'framer-motion'

/*
                1. Team Building
                2. Motivation and Leadership training
                3. Sales Training
*/

const Container = styled(motion.div)`
  background-color: #f5f5f5;
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.div`
  background-color: #2b2d42;
  padding: 50px 0;
  font-size: 36px;
  color: #fff;
  text-align: center;
`;
const ServicesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ServicesListItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const ServiceIcon = styled.img`
    width: 120px;
    height: 120px;
    padding: 20px 0;
    color: darkblue;
`

const servicesData = ServiceData


const Services = (props) => {
  useEffect(() => {
    const SetTitle = async () => {
      document.title = `${await props.title} - MotivCenter`
    }
    SetTitle()
  }, [])
  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Header>Our Services</Header>
      <ServicesList>
        {servicesData.map((service, index) => (
          <ServicesListItem key={index}>
            <ServiceIcon src={service.link} />
            <h3>{service.name}</h3>
            <p>{service.info}</p>
          </ServicesListItem>
        ))}
      </ServicesList>

    </Container>
  )
}

export default Services
