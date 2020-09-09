import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  font-size: inherit;
  color: inherit;
`;

const BoltLink = ({ switchTheme }) => {

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // const { switchTheme } = props;
  
  const [isDarkMode, setDarkMode] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [randomNum, setRandomNum] = useState(getRandomInt(3, 9));

  const handleClick = () => {
    const darkMode = isDarkMode;
    setClicks(clicks + 1);
    if (clicks === randomNum) {
      setDarkMode(!isDarkMode);
      setTimeout(() => {
        setDarkMode(darkMode);
      }, 150);
      setRandomNum(getRandomInt(3, 9));
      setClicks(0);
    }
    if (clicks > 9) {
      setClicks(0);
    }
  }

  useEffect(() => {
    switchTheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode]);

  

  return (
    <Button>
      <FontAwesomeIcon icon={"bolt"} size="xs" onClick={handleClick} />
    </Button>
  )
}

export default BoltLink;
