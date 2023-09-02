
import './App.css';
import About from './components/About';
import Develop from './components/Develop';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Develop/>
    <Subscribe/>
    </div>
  );
}

export default App;
