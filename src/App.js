import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/skills/Skills';
import SnowStorm from 'react-snowstorm';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
