import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import BgC from '../assets/ContactBg.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:   ${props=> props.backgroundpic? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))": "none"}, url(${props => props.backgroundpic? props.backgroundpic : "none" });
  background-size: cover;
  @media only screen and (max-width:1024px){
    height: auto;
    width: 100%;
    min-height: 72vh;
    }
    @media only screen and (max-width:480px){
    height: auto;
    width: 100%;
    min-height: 50vh;
    }
`;
const Header = styled.div`
  background-color: #2b2d42;
  padding: 50px 0;
  font-size: 36px;
  color: #fff;
  text-align: center;
  @media only screen and (max-width:480px){
    padding: 25px 0;
    }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background: rgba(0, 0, 0, 0.199);
  border: 1px solid #2b2d422d;
  border-radius: 5px;
  @media only screen and (max-width:480px){
    padding: 59px;
    }
`;

const InputWrapper = styled(Form.Item)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const InputText = styled(Input)`
  width: 250px;
`

const SubmitButton = styled(Button)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: white;
  color: grey;;
  border: 1px solid #0000002f;
  border-radius: 5px;

  &:hover {
    background-color: #40a9ff;
  }
  @media only screen and (max-width:1024px){
    margin-top: 10px;
    }
`;

const ContactPage = (props) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = () => {
    // send form data to server or API endpoint
  };

  useEffect(() => {
    const SetTitle = async () =>{
      document.title = `${await props.title} - MotivCenter`
    }
    SetTitle()
  }, [])

  return (
    <>
    <Header>Contact Us</Header>
    <Container backgroundpic={BgC}>
      <FormWrapper>
        <Form onFinish={handleSubmit}>
          <InputWrapper>
            <InputText placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
          </InputWrapper>
          <InputWrapper>
            <InputText placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </InputWrapper>
          <InputWrapper>
            <InputText placeholder="Subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
          </InputWrapper>
          <InputWrapper>
            <InputText.TextArea rows={5} placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </InputWrapper>
          <ButtonContainer>
          <SubmitButton type="primary" htmlType="submit" >
            Submit
          </SubmitButton>
          </ButtonContainer>

        </Form>
      </FormWrapper>
    </Container>
    </>
  );
};

export default ContactPage;
