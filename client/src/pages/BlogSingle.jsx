import React from 'react'
import styled from 'styled-components'
import EditIco from '../img/edit.png'
import DeleteIco from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Blog/Menu'
import { motion } from 'framer-motion'


const Container = styled(motion.div)`
display: flex;
gap: 50px;
min-height: 100vh;
padding: 10px 30px;

`

const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const MenuDiv = styled.div`
  flex: 2;
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const User = styled.div`

  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

`
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50% ;
  object-fit: cover;
`

const Info = styled.div``
const Name = styled.span`
  font-weight: bold;
`
const PostDate = styled.p``

const Edit = styled.div`
  display: flex;
  gap: 5px;
`

const EditImg = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 42px;
  color: #333;
`

const Description = styled.p`
  text-align: justify;
  line-height: 30px;
`

const BlogSingle = () => {
  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Content>
        <Image src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <User>
          <UserImg />
          <Info>
            <Name>John</Name>
            <PostDate>Posted 2 days ago</PostDate>
          </Info>
          <Edit>
            <Link to={`/blog/write?edit=2`}>
              <EditImg src={EditIco} />
            </Link>
            <EditImg src={DeleteIco} />
          </Edit>
        </User>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eum?</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut nisi illo accusamus vero autem suscipit doloribus qui, ex enim voluptatem ipsam animi, aut impedit iste ipsum, eligendi corporis temporibus. <br /> <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus libero tempora, esse dolorem illo minus laboriosam. Et, aut tempore, inventore suscipit magnam delectus ad aperiam molestias omnis, eius saepe! </Description>
      </Content>
      <MenuDiv>
        <Menu />
      </MenuDiv>
    </Container>
  )
}

export default BlogSingle