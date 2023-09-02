
import './App.css';
import About from './components/About';
import Develop from './components/Develop';
import Footer from './components/Footer';
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
    <Footer/>
    </div>
  );
}

export default App;
