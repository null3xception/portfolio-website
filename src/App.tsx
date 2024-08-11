import NavBar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Service from "@/scenes/servicesOffer";
import Skills from "@/scenes/skills";
import Projects from "@/scenes/projects";
import ContactMe from "@/scenes/contactme";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>
  (SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return <div className="app bg-brown-50 w-full">
    <NavBar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
     <Home setSelectedPage={setSelectedPage} />
     <Service setSelectedPage={setSelectedPage} />
     <Skills setSelectedPage={setSelectedPage} />
     <Projects setSelectedPage={setSelectedPage} />
     <ContactMe setSelectedPage={setSelectedPage} />

  </div>;
}

export default App
