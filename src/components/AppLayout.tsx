import About from "./About";
import Content from "./Content";
import Name from "./Name";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <Name />
      <div className="details">
        <div className="extra-content">
          <About />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
