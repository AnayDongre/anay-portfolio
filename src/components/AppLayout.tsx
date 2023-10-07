import About from "./About";
import Content from "./Content";
import Name from "./Name";
import NavBar from "./NavBar";
import Socials from "./Socials";

function AppLayout() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>

      <div className="details">
        <div className="left-content">
          <Name />
          <About />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
      <footer>
        <Socials />
      </footer>
    </>
  );
}

export default AppLayout;
