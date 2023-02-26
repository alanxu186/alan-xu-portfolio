import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing.jsx";

import LineGradient from "./components/LineGradient";

import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  //state of navbar background change
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //check if min-width is less than/greater than 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing 
          setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient/>
    </div>
  );
}

export default App;
