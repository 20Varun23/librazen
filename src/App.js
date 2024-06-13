import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ParticlesComponent from "./Components/Particle";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ParticlesComponent id="particles" />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
