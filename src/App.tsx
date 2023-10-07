import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Name from "./components/Name";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Name />
      <Content />
      <BrowserRouter>
        <Routes>
          <Route path="/anaydongre/exp" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
