import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Map from '../../img/map.png'
import Send from '../../img/send.png'
import Phone from '../../img/phone.png'
import { motion } from 'framer-motion'

const Container = styled.div`
    padding: 50px 20px;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png")
  ;
  @media only screen and (max-width:776px){
    padding: 30px 20px;
    }
    @media only screen and (max-width:408px){
        padding: 20px 20px;
    }
`
const Wrapper = styled.div`
    height:100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
    @media only screen and (max-width:776px){
        flex-direction:column;
    }
`
const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        width:100%;
    }
    @media only screen and (max-width:776px){
        width: 100%;
    }
`
const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
    margin-left: 80px;
    @media only screen and (max-width:480px){
        margin:20px;
        text-align: center;
    }
`


const Form = styled.form`
    height:250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
`
const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right:20px;
    @media only screen and (max-width:480px){
        height: 50%;
        margin-right:0 ;
    }
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        margin-right: 0;
        height: 50%;
    }
`
const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width:480px){
        padding: 5px;
    }
`
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width:480px){
        padding: 5px;
        margin-top: 20px;
    }
`
const Button = styled(motion.button)`
    padding: 15px 30px;
    margin: 10px 0px;
    border:none;
    color: white;
    background-color: darkblue;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    @media only screen and (max-width:480px){
        padding: 10px 30px;
    }
`
const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    @media only screen and (max-width:480px){
        width: 100%;
        margin-top: 20px;
        padding-top: 0;
    }
        @media only screen and (max-width:776px){
        width: 100%;
        margin-top: 20px;
        padding-top: 0;
    }
`
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
    padding-left: 100px;
    @media only screen and (max-width:480px){
        margin-bottom: 20px;
        padding-left: 0;
    }
        @media only screen and (max-width:776){
        margin-bottom: 20px;
        padding-left: 0;
    }


`
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width:480px){
        width: 15px;
    }
`
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    @media only screen and (max-width:480px){
        font-size: 14px;
    }
        @media only screen and (max-width:776px){
        font-size: 18px;
    }
`
const MailTo = styled.a`
    color : black;
    text-decoration: none;
    font-size: 20px;
    margin-right: 15px;
    @media only screen and (max-width:480px){
        font-size: 14px;
    }
            @media only screen and (max-width:776px){
        font-size: 18px;
    }

`

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = () => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions ? <br /> Lets Get In Touch</Title>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <LeftForm>
                            <Input placeholder='Your Name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <Input placeholder='Your Email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <Input placeholder='Subject' onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder='Your Message' onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            <Button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map} />
                        <Text>Head Office Avenida Salvador <br /> Allende No. 847, Maputo, <br /> Mozambique </Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone} />
                        <MailTo href='tel:+258840396785'>+258 82 6617405/ +258 84 0396785
                        </MailTo>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send} />
                        <MailTo href='mailto:motivcenter@motivcenter.com'>motivcenter@motivcenter.com</MailTo>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact