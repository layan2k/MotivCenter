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
`;
const Header = styled.div`
  background-color: #2b2d42;
  padding: 50px 0;
  font-size: 36px;
  color: #fff;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: #2b2d42;
  border-radius: 5px;
`;

const InputWrapper = styled(Form.Item)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
  background-color: #1890ff;
  border: none;

  &:hover {
    background-color: #40a9ff;
  }
`;

const ContactPage = (props) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
            <Input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} width='100%'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </InputWrapper>
          <InputWrapper>
            <Input.TextArea rows={4} placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </InputWrapper>
          <SubmitButton type="primary" htmlType="submit">
            Submit
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
    </>
  );
};

export default ContactPage;
