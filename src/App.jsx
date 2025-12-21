import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { LandingPage } from "./components/landingpage";
import {Footer} from './components/footer'
import { Blocks } from "react-loader-spinner";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Blocks
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{ justifyContent: "center" }}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="@container">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
          
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
