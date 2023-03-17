import styled from "styled-components";
import Ozias from "../../assets/Ozias.jpg"

const Container = styled.div`
    padding: 0px 20px;
    display:flex;
    height:100%;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        flex-direction:column;
        text-align: center;
        padding: 20px 0;
    }
    @media only screen and (max-width:776px){
        flex-direction:column;
        text-align: center;
        padding: 30px 0;
        justify-content: center;
        align-content: center;
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
       @media only screen and (max-width:px){
        width: 100%;
        padding: 0 10px;
    }
    @media only screen and (max-width:776px){
        width: 100%;
        align-items: center;
        justify-content: center;

    }
`
const Right = styled.div`
    display:flex;
    width:50%;
    @media only screen and (max-width:480px){
        width:100%;
    }
    @media only screen and (max-width:776px){
        width:100%;
    }
`
const Image = styled.img`
    height:400px;
    width: 400px;
    padding-right: 245px;
    @media only screen and (max-width:480px){
        width:95%;
        height: 380px;
    }
    @media only screen and (max-width:776px){
        padding-right: 0;
        padding: 10px 0;
    }
`
const Wrapper = styled.div`
    padding: 50;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
        padding:20px;
    }
        @media only screen and (max-width:776px){
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
    text-align: justify;

`


const AboutOzias = () => {

    return (
        <>
            <Container>
                <Left>
                    <Image src={Ozias} />
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

export default AboutOzias