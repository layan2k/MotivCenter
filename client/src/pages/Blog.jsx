import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
padding: 0 30px;
padding-bottom: 100px;

`

const Posts = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
gap: 150px;

`
const Post = styled.div`
 display: flex;
 gap: 100px;
 &:nth-child(2n + 1){
  flex-direction: row-reverse;
 }

`

const ImageContainer = styled.div`
  flex: 2;
  position: relative;
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: royalblue;
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: -1;


  }
`
const Imge = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;

`
const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`

const Title = styled.h1`
  font-size: 48px;
`

const Description = styled.p`
  font-size: 18px;
`

const Button = styled.button`
  width: max-content;
  padding: 10px 20px;
  border: 1px solid royalblue;
  color: royalblue;
  background: white;
  cursor: pointer;
  &:hover{
    border: 1px solid white;
    background-color: royalblue;
    color: white;
  }
`

const Blog = (props) => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

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
      <Posts>
        {posts.map(post => (
          <Post key={post.id}>
            <ImageContainer>
              <Imge src={post.img} />
            </ImageContainer>
            <Content>
              <Link className="link" to={`/blog/post/${post.id}`}>
                <Title>{post.title}</Title>
              </Link>
              <Description>{post.desc}</Description>
              <Button>Read More</Button>
            </Content>
          </Post>
        ))}
      </Posts>
    </Container>
  )
}


export default Blog
