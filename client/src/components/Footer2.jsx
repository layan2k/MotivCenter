import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/Logo1.png'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b2d42;
  color: #fff;
  padding: 20px;
    @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLogo = styled.img`
  height: 40px;
  margin-right: 10px;
    @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;
  }
`;

const FooterRight = styled.div`
  display: flex;
    @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const FooterLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-left: 20px;

`;
const Copyright = styled.span`
  padding-right: 15px;
  margin-top: 10px;
  @media only screen and (max-width:480px){
        font-size:14px;
        padding-right: 0;
    }
`

const BusinessFooter = () => {
  const currentDate = new Date()
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo src={LogoImg} alt="Logo" />
        <Copyright>&copy; {currentDate.getFullYear()} MotivCenter. All rights reserved.</Copyright>
      </FooterLeft>
      <FooterRight>
        <FooterLink to="/privacy">Privacy Policy</FooterLink>
        <FooterLink to="/terms-and-conditions">Terms of Use</FooterLink>
      </FooterRight>
    </FooterContainer>
  );
};

export default BusinessFooter;
