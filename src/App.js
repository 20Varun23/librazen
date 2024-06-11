import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HeroComponent from "./Components/HeroComponent";

function App() {
  return (
    <body className="Body">
      <NavBar />

      <HeroComponent />

      {/* Footer */}
      <Footer />
    </body>
  );
}

export default App;
