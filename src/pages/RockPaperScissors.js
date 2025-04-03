import { Box } from "@mui/material";
import React, { useState } from 'react';
import RPS from '../components/RPS'

export default function RockPaperScissors() {
  const question = require('../images/question-mark.png');
  const rock = require('../images/stone.png');
  const paper = require('../images/paper.png');
  const scissors = require('../images/scissors.png');
  const imageChoices = [question, rock, paper, scissors];
  const backgroundChoices = ['#E9EDC9', '#009965', '#A52A2B']
  const [image, setImage] = useState(question);
  const [background, setBackground] = useState(backgroundChoices[0]);

  function handleComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];
    setImage(imageChoices[randomIndex + 1])
    return computer;
  };

  function handleUserChoice(userChoice) {
    calculateResult(userChoice, handleComputerChoice())
  };

  const calculateResult = (user, computer) => {
    if (user === computer) {
      setBackground(backgroundChoices[0])
    }
    else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setBackground(backgroundChoices[1])
    }
    else {
      setBackground(backgroundChoices[2])
    }
  };

  return (
    <Box sx={{
      backgroundColor: '#CCD5AE',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <RPS title='Computer' img={image} backgroundColor={background}/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <RPS backgroundColor='#E9EDC9' title='Rock' img={rock} userChoice='rock' onClick={() => handleUserChoice('rock')} />
        <RPS backgroundColor='#E9EDC9' title='Paper' img={paper} userChoice='paper' onClick={() => handleUserChoice('paper')} />
        <RPS backgroundColor='#E9EDC9' title='Scissors' img={scissors} userChoice='scissors' onClick={() => handleUserChoice('scissors')} />
      </Box>
    </Box>
  );
}