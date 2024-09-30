import '../styles/App.css';
import Accessory from '../components/Accessory.js';
import Box from '@mui/material/Box';

const timer = require('../images/timer.png');
const calculator = require('../images/calculator.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box display={'flex'}>
          <Accessory title={'Timer'} img={timer} link={'www.google.com'} />
          <Accessory title={'Calculator'} img={calculator} link={'www.google.com'} />
        </Box>
      </header>
    </div>
  );
}

export default App;
