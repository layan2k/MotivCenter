import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import { ServiceData } from '../../data/services'

const Container = styled.div`
    padding: 0px 20px ;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:480px){
        flex-direction:column;
        padding: 20px 0px ;
        gap : 20px;
    }
    @media only screen and (max-width:776px){
        flex-direction:column;
        padding: 30px 0px ;
        gap : 30px;
    }
        @media only screen and (max-width:1024px){
        padding: 30px 0px ;
        gap : 30px;
    }
`

const Serviceitems = () => {
  const data = ServiceData
  return (
    <Container>
      {data.map((item, i) =>
        <ServiceCard key={i} name={item.name} info={item.info} link={item.link} />
      )}

    </Container>
  )
}

export default Serviceitems