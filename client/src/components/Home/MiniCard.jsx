import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
    display:flex;
    width: 100px;
    padding: 20px;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    align-items: center;
    @media only screen and (max-width:480px){
        width:50px;
    }
`
const Image = styled.img`
    width:20px;
`
const Text = styled.span`
    margin-top: 10px;
    text-align: center;
    @media only screen and (max-width:480px){
        font-size:15px;
    }

`

const MiniCard = () => {
  return (
    <Container>
        <Image src={Search} />
        <Text>Lorem,ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Container>
  )
}

export default MiniCard