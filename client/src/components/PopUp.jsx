import React, { useState } from 'react';
import styled from 'styled-components';
import Terms from '../pages/Terms';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    padding: 10px 20px;
    border: none;
    max-width: 200px;
    background-color: green;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: #003a0d;
    }

  }
`;

const TermsAndConditionsPopup = () => {
    const [showPopup, setShowPopup] = useState(true);

    if (!showPopup) {
        return null;
    }

    return (
        <PopupContainer>
            <PopupContent>
                <h2>Terms and Conditions</h2>
                {/* Insert your terms and conditions content here */}
                <Terms />
                <button onClick={() => setShowPopup(false)}>Accept</button>
            </PopupContent>
        </PopupContainer>
    );
};

export default TermsAndConditionsPopup;
