import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const Heading = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const PrivacyPolicy = () => {
    return (
        <Container>
            <Title>Privacy Policy</Title>
            <Heading>Privacy Policy for Motivcenter</Heading>
            <Paragraph>
                Motivcenter ("we," "us," or "our") is committed to protecting the privacy and security of the personal information we collect from our customers and website visitors. This privacy policy describes how we collect, use, and disclose personal information.
            </Paragraph>
            <Heading>Collection of Personal Information</Heading>
            <Paragraph>
                We collect personal information when you provide it to us directly, such as when you register for our training courses, sign up for our newsletter, or contact us through our website. The personal information we collect may include your name, email address, phone number, company name, job title, and payment information.
            </Paragraph>
            <Heading></Heading>
            <Paragraph>
                We also automatically collect certain information when you visit our website, such as your IP address, browser type, and operating system. We use this information to analyze trends, administer our website, track user movements, and gather demographic information.
            </Paragraph>
            <Heading>Use of Personal Information</Heading>
            <Paragraph>
                We use your personal information to provide you with our training courses and other services, communicate with you about your account or transactions, and send you information about our products and services. We may also use your personal information for research purposes, such as improving our training courses and website.
            </Paragraph>
            <Heading>Disclosure of Personal Information</Heading>
            <Paragraph>
                We may disclose your personal information to third-party service providers who help us provide our services to you, such as payment processors, email marketing platforms, and website hosting providers. We only disclose the personal information necessary for these third-party service providers to perform their functions.
                <br />
                We may also disclose your personal information to comply with legal requirements, such as a court order, subpoena, or other lawful requests by public authorities.
            </Paragraph>
            <Heading>Data Security</Heading>
            <Paragraph>
                We take reasonable measures to protect the personal information we collect from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the security of your personal information.
            </Paragraph>
            <Heading>
                Your Rights
            </Heading>
            <Paragraph>
                You have the right to access, correct, update, or delete your personal information we collect. You may also withdraw your consent to our collection and use of your personal information at any time. To exercise these rights, please contact us at the contact information below.
            </Paragraph>
            <Contact>
                <h2 style={{ textAlign: "center", fontSize: "1rem" }}>
                    Contact Us
                </h2>
                <h3>
                    If you have any questions or concerns about our privacy policy, please contact us at:
                </h3>
                <p>Head Office Avenida Salvador
                    <br />Allende No. 847, Maputo,
                    <br />Mozambique
                    <br />Tel.+258 82 6617405/ +258 84 0396785
                    <br />Email: motivcenter@motivcenter.com
                    <br />Skype: ozymucheri
                    <br />Website: www.motivcenter.com</p>
            </Contact>

        </Container>
    )
}

export default PrivacyPolicy
