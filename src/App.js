import Navbar from "./scenes/Navbar";

import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  //check if min-width is less than/greater than 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
