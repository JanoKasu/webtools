import { Box, MenuItem, Select } from "@mui/material";
import * as React from 'react';

export default function Conversion() {
  const [Currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

	return (
    <Box sx={{
      backgroundColor: '#CCD5AE',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
    </Box>
  );
}