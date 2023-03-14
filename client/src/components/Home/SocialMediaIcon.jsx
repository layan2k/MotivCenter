import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

function SocialMediaIcon({data}) {
  const Icon = data
  return (
    <Image src={Icon.logo}/>
  )
}

export default SocialMediaIcon