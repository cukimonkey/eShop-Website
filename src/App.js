import './App.css';
import Nav from './Nav';
import Home from './Home';
import { Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/'element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
    </div>
  );
}

export default App;
