import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Timer from './Timer';
import Calculator from './Calculator';
import Conversion from './UnitConverter';
import ToDo from './ToDo';
import RockPaperScissors from './RockPaperScissors';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/converter' element={<Conversion />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/rockpaperscissors' element={<RockPaperScissors />} />
      </Routes>
    </Router>
  );
}