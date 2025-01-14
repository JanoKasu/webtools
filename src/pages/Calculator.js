import { Box, Button, TextField } from "@mui/material";

export default function Calculator() {
  let num1, num2;
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
      <label>
        Answer
      </label>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <TextField
          type="number"
          placeholder="Type a number…"
          value={num1}
          sx={{ marginX: '5vw', marginY: '5vh' }}
        />
        <TextField
          type="number"
          placeholder="Type a number…"
          value={num2}
          sx={{ marginX: '5vw', marginY: '5vh' }}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Button sx={{ border: 1, marginX: '2vw', marginY: '5vh' }}>Add</Button>
        <Button sx={{ border: 1, marginX: '2vw', marginY: '5vh' }}>Subtract</Button>
        <Button sx={{ border: 1, marginX: '2vw', marginY: '5vh' }}>Multiply</Button>
        <Button sx={{ border: 1, marginX: '2vw', marginY: '5vh' }}>Divide</Button>
      </Box>
    </Box>
  );
}