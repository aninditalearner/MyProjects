import React from 'react';
import ProductSearch from './components/ProductSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productDetails from './components/productDetails';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/search" element={<ProductSearch/> }/>
          <Route path="/product/:productId" element={<productDetails/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;