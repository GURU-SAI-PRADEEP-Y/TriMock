import Navbar from "./components/Navbar/Navbar";
import GridAssets from "./components/GridAssets";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import LandingPage from "./components/LandingPage";
import Canva from "./components/Canva";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Hero />
        </div>
        <GridAssets />
        <Routes>
          {/* <Route path="/#" element={<LandingPage />} /> */}
          <Route path="/canva" element={<Canva />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
