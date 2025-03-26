import { Box } from "@mui/material";
import * as React from 'react';
import RPS from '../components/RPS'

export default function RockPaperScissors() {
  const rock = require('../images/stone.png')
  const paper = require('../images/airplane.png')
  const scissors = require('../images/scissors.png')

	return (
    <Box sx={{
      backgroundColor: '#CCD5AE',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <RPS title='Rock' img={rock}/>
      <RPS title='Paper' img={paper}/>
      <RPS title='Scissors' img={scissors}/>
    </Box>
  );
}