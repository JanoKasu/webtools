import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Timer from './Timer';
import Calculator from './Calculator';
import Conversion from './UnitConverter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/converter' element={<Conversion />} />
      </Routes>
    </Router>
  );
}