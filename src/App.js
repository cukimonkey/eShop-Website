import './App.css';
import Nav from './Nav';
import Home from './Home';
import { Routes, Route} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/'element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
