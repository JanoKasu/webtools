import { Box, Button } from "@mui/material";

let count = 0;
let startButton;
let timerInterval;
let timerDisplay;

function startTimer() {
  clearInterval(timerInterval);
  count = 0;
  timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = count;
  timerInterval = setInterval(() => {
    count++;
    timerDisplay.textContent = (count / 100).toFixed(2);
  }, 10);
  startButton = document.getElementById('startButton');
  startButton.disabled = true;
}

const stopTimer = () => {
  clearInterval(timerInterval);
  timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = (count / 100).toFixed(2);
  startButton = document.getElementById('startButton');
  startButton.disabled = false;
}

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
      <Box sx={{ fontSize: 50 }} id='timer'>0</Box>
      <Button sx={{
        backgroundColor: '#FEFAE0',
        margin: '5vh 5vw',
        borderRadius: '20px',
        padding: '20px',
        color: '#D4A373',
        height: '20%',
        width: '20%',
      }}
      id='startButton'
      onClick={startTimer}>
        Start Timer
      </Button>
      <Button sx={{
        backgroundColor: '#FEFAE0',
        margin: '5vh 5vw',
        borderRadius: '20px',
        padding: '20px',
        color: '#D4A373',
        height: '20%',
        width: '20%',
      }}
      id='stopButton'
      onClick={stopTimer}>
        Stop Timer
      </Button>
    </Box>
  );
}