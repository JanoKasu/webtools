import '../styles/Accessory.css';
import React from 'react';
import { Box, Button, colors } from '@mui/material';

export default function Accessory(props) {
  return (
    <Button style={{ backgroundColor: '#E9EDC9', borderRadius: '25px', display: 'flex', flexDirection: 'column', margin: '5vh 5vw'}}>
      <img src={props.img} alt='Error Loading' style={{ height: '35vh', padding: '3vh' }}/>
      <Box style={{fontSize: '30px', color: 'black'}}>
        {props.title}
      </Box>
    </Button>
  );
}