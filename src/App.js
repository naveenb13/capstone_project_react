import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Favourites from './Favourites';
import Suggestions from './Suggestions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} >
            <Route path='' element={<Homepage />} />
            <Route path='suggestions' element={<Suggestions />} />
            <Route path='favourites' element={<Favourites />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
