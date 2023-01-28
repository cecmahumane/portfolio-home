// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      {/* <Bio/> */}
      <Projects/>
      {/* <Contacts/> */}
      <Footer/>
    </div>
  );
}

export default App;
