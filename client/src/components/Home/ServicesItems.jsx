import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import { ServiceData } from '../../data/services'

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
`

const Serviceitems = () => {
  const data = ServiceData
  return (
    <Container>
        {data.map((item, i)=>
          <ServiceCard key={i} name={item.name} info={item.info} link={item.link}/>
        )}

    </Container>
  )
}

export default Serviceitems