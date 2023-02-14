import React, { useEffect, useState } from 'react'
import Navbar from './navbar';
import Benefits from './pages/homepage/benefits';
import ContactUs from './pages/homepage/contactUs';
import Footer from './pages/homepage/footer';
import Homepage from './pages/homepage/home';
import OurClasses from './pages/homepage/ourClasses';
import { SelectedPage } from './types/types';

const Landingpage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
      );
      const [isTopOfPage, setisTopOfPage] = useState<boolean>(true);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setisTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
          }
          if (window.scrollY !== 0) setisTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Homepage setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default Landingpage