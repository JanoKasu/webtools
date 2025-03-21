import '../styles/Home.scss'
import Accessory from '../components/Accessory.js';
import Box from '@mui/material/Box';

export default function Home() {
  const timer = require('../images/timer.png');
  const calculator = require('../images/calculator.png');
  const converter = require('../images/converter.png');
  const todo = require('../images/todo.png');
  const rps = require('../images/rps.png');

  return (
    <div className="App">
      <header className="App-header">
        <Box display={'flex'} flexDirection={'column'}>
          <Box display={'flex'}>
            <Accessory title={'Timer'} img={timer} link={'/timer'} />
            <Accessory title={'Calculator'} img={calculator} link={'/calculator'} />
            <Accessory title={'Unit Converter'} img={converter} link={'/converter'} />
          </Box>
          <Box display={'flex'}>
            <Accessory title={'To Do'} img={todo} link={'/todo'} />
            <Accessory title={'Rock Paper Scissors'} img={rps} link={'/rockpaperscissors'} />
          </Box>
        </Box>
      </header>
    </div>
  );
}