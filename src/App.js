import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
