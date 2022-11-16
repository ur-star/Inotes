import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element ={<Home/>}></Route>
    <Route exact path="/about" element ={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
