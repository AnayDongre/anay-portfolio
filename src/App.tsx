import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [navButtons, setNavButtons] = useState([
    {
      id: 1,
      name: "About",
      isActive: true,
    },
    {
      id: 2,
      name: "Experience",
      isActive: false,
    },
    {
      id: 3,
      name: "Contact",
      isActive: false,
    },
  ]);
  const onNavButtonClick = (id: number) => {
    setNavButtons(
      navButtons.map((navButton) => {
        if (navButton.id === id) {
          navButton.isActive = true;
        } else {
          navButton.isActive = false;
        }
        return navButton;
      })
    );
  };
  const getContent = () => {
    const activeContent = navButtons.find(
      (navButton) => navButton.isActive
    )?.name;
    if (activeContent === "About") {
      return <About />;
    } else if (activeContent === "Experience") {
      return <Experience />;
    } else {
      return <Contact />;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar navButtons={navButtons} onNavButtonClick={onNavButtonClick} />
      </header>
      <Name />
      <div className="details">
        <div className="extra-content"></div>
        <div className="content-container">{getContent()}</div>
      </div>
    </div>
  );
}

export default App;
