// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import MobileHeader from './MobileComponents/MobileHeader';
import MobileHeroSection from './MobileComponents/MobileHeroSection';
import MobileBio from './MobileComponents/MobileBio';
import MobileProjects from './MobileComponents/MobileProjects';
import MobileFooter from './MobileComponents/MobileFooter';

function App() {
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width };
  }

  const { width } = useViewport();
  const breakpoint = 1350;

  return (
    <BrowserRouter>
      <div>
        {width > breakpoint ? <div className="std">
          <Header />
          <HeroSection />
          <Bio />
          <Projects id='projects' />
          {/* <Contacts /> */}
          <Footer />
        </div> :
          <div className='mobile'>
            <MobileHeader/>
            <MobileHeroSection/>
            <MobileBio/>
            <MobileProjects/>
            <MobileFooter/>
          </div>}
      </div>
    </BrowserRouter>
  );
}

export default App;
