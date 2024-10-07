import '../styles/Accessory.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function Accessory(props) {
  const navigate = useNavigate();

  return (
    <Button color='#D4A373' onClick={() => navigate(props.link)} >
      <img draggable={false} src={props.img} alt='Error Loading' />
      <Box style={{ fontSize: '30px', color: 'black' }}>
        {props.title}
      </Box>
    </Button>
  );
}