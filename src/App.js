import Navbar from "./scenes/Navbar";

import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  //state of navbar background change
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //check if min-width is less than/greater than 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

  useEFF

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
