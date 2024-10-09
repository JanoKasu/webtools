import { Box, Button } from "@mui/material";

export default function Timer() {
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
      <Box sx={{backgroundColor: 'blue'}}>Label</Box>
      <Button sx={{
        backgroundColor: '#FEFAE0',
        margin: '5vh 5vw',
        borderRadius: '20px',
        padding: '20px',
        color: '#D4A373',
        height: '20%',
        width: '20%',
      }}>Start Timer</Button>
    </Box>
  );
}