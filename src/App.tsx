import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./components/Experience";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="App">
      <AppLayout />
      <BrowserRouter>
        <Routes>
          <Route path="/anaydongre/exp" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
