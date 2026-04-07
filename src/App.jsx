import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { LandingPage } from "./components/landingpage";
import { Footer } from "./components/footer";
import { Blocks } from "react-loader-spinner";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000); // reduce to 2s for testing
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Blocks height="100" width="100" color="#4fa94d" visible={true} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      {/* ✅ FIXED CONTAINER */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;