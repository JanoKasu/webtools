import '../css/App.css';
import Button from '../components/Button';

const timer = require('../images/timer.png');
const calculator = require('../images/calculator.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="horizontal">
          <Button title={'Timer'} img={timer} link={'www.google.com'} />
          <Button title={'Calculator'} img={calculator} link={'www.google.com'} />
        </div>
      </header>
    </div>
  );
}

export default App;
