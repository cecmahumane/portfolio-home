// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HeroSection />
        <Bio />
        <Projects id='projects' />
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
