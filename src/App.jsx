import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
