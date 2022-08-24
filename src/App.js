import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import { useState } from "react";
// pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import Contacts from "./components/pages/Contacts";
import Portfolio from "./components/pages/Portfolio";

// style Sheet
import "./styles.css";

function App() {
  const [isActive, setIsActive] = useState("");
  const addStyle = () => {
    setIsActive("navbar-shrink");
  };

  const removeStyle = () => {
    setIsActive("");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <PageWrapper
          addStyle={addStyle}
          removeStyle={removeStyle}
          isActive={isActive}
        />
        <Routes>
          <Route path="/" element={<Home addStyle={addStyle} />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/portfolio" element={<Portfolio />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/team" element={<Team />} exact />
          <Route path="/contact" element={<Contacts />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
