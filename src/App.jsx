import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Canva from "./components/Canva";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import GridAssets from "./components/GridAssets";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />

        {/* Canva Page Route */}
        <Route path="/canva" element={<Canva />} />
      </Routes>
    </Router>
  );
}

export default App;
