import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`
const LinkIcon = styled.a`
  text-decoration: none;
`

function SocialMediaIcon({data}) {
  const Icon = data
  return (
    <>
    <LinkIcon href={Icon.link} target='_blank'  rel="noopener noreferrer">
    <Image src={Icon.logo}/>
    </LinkIcon>
    </>
  )
}

export default SocialMediaIcon