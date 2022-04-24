import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlResults2 from "../src/components/results/MainResults.jsx";
import Main from "./components/main/Main.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Results/:id/:id2" element={<HtmlResults2 />} />
      </Routes>
    </div>
  );
};

export default App;
