import React from "react";
import ProductSearch from "./components/ProductSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/FetchProductDetails";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
