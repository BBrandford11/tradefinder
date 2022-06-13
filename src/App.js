import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const name = "Trade Finder";
  return (
    <div className="App">
      <BrowserRouter>
        <Header name={name} />
        <Nav name={name} />
        <Routes>
          <Route path="/" element={<Body name={name} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
