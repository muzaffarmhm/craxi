import './App.css';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Home from './pages/Home';

function App() {
  return (
    <Home/>
  );
}

export default App;
