import '../styles/Timer.css';
import { Box, Button } from "@mui/material";

export default function Timer() {
  return (
    <div>
      <header className="header">
        <Box style={{ height: '15vh', width: '15vw', flexDirection: 'column' }}>
          <Box>Label</Box>
          <Button color='#D4A373'>Start Timer</Button>
        </Box>
      </header>
    </div>
  );
}