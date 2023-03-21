import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`
const LinkIcon = styled(motion.a)`
  text-decoration: none;
`

function SocialMediaIcon({ data }) {
  const Icon = data
  return (
    <>
      <LinkIcon
        href={Icon.link}
        target='_blank'
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
      >
        <Image src={Icon.logo} />
      </LinkIcon>
    </>
  )
}

export default SocialMediaIcon