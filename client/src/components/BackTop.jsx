import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButton = styled.button`
  display: none;
  position: fixed;
  bottom: 100px;
  right: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    display: block;
    opacity: 1;
  }

  &:hover {
    background-color: #3e8e41;
  }
`;

function BackToTop() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      if (scrollBottom >= documentHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleButtonClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <BackToTopButton
      className={isBottom ? 'visible' : ''}
      onClick={handleButtonClick}
    >
      Back to Top
    </BackToTopButton>
  );
}

export default BackToTop