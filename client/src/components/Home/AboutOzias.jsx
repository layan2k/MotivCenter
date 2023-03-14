import styled from "styled-components";
import Ozias from "../../assets/Ozias.jpg"

const Container = styled.div`
    display:flex;
    height:100%;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        flex-direction:column;
        text-align: center;
    }
`
const Left = styled.div`
    display:flex;
    width: 50%;
    position:relative;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Right = styled.div`
    display:flex;
    width:50%;
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const Image = styled.img`
    height:400px;
    width: 400px;
    padding-right: 245px;
    @media only screen and (max-width:480px){
        width:100%;
        padding: 10px;
    }
`
const Wrapper = styled.div`
    padding: 50;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
        padding:20px;
    }
`
const Title = styled.h1`
font-size: 30px;
font-weight: 500;
color:#4169e1;


`
const Description = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
    line-height: 200%;

`


const Service = () => {

  return (
      <>
    <Container>
        <Left>
            <Image  src={Ozias} />
        </Left>
        <Right>
            <Wrapper>
                <Title>About Ozias Mucheriwa</Title>
                <Description>Ozias Mucheriwa is best known for transforming workplaces, creating cohesion, improved communication, and teamwork among various teams. He helps the Sales team boost their sales by leveraging modern sales techniques such as value-adding education-based selling and diagnostic selling. He is also a Leadership and author of the Leadership book – <strong>The Pharaoh Model of Leadership</strong>. He transforms organizations by optimizing talent, leveraging training to cultivate a high-performance culture, developing leadership and coaching skills.
                </Description>

            </Wrapper>
        </Right>
    </Container>
    </>
  )
}

export default Service