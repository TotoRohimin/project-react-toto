import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateP from "./pages/CreateProduct.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Welcome");
  });

  return (
    <Routes>
      <Route path="/CreateProduct" element={<CreateProduct />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
