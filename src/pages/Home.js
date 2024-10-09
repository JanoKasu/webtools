import '../styles/Home.scss'
import Accessory from '../components/Accessory.js';
import Box from '@mui/material/Box';

export default function Home() {
  const timer = require('../images/timer.png');
  const calculator = require('../images/calculator.png');
  const converter = require('../images/converter.png');
  
  return (
    <div className="App">
      <header className="App-header">
        <Box display={'flex'}>
          <Accessory title={'Timer'} img={timer} link={'/timer'} />
          <Accessory title={'Calculator'} img={calculator} link={'/calculator'} />
          <Accessory title={'Unit Converter'} img={converter} link={'/converter'} />
        </Box>
      </header>
    </div>
  );
}