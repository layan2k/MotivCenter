import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
`;

const GalleryImage = styled.img`
  height: 400px;
  width: 100%;
  padding-top: 75px ;
  opacity: ${props => (props.current ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const images = [
  "https://picsum.photos/800/400",
  "https://picsum.photos/801/400",
  "https://picsum.photos/802/400",
  "https://picsum.photos/803/400",
  "https://picsum.photos/804/400",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div>
      <GalleryContainer>
        <GalleryImage src={images[currentIndex]} alt="Gallery Image" current={currentIndex}/>
      </GalleryContainer>
      <ControlsContainer>
        <ControlButton onClick={handlePrevClick}>{"<-"}</ControlButton>
        <ControlButton onClick={handleNextClick}>{"->"}</ControlButton>
      </ControlsContainer>
    </div>
  );
};

export default Gallery;
