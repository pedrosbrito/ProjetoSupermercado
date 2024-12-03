import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Mova isso para o topo
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FormProduct from './pages/FormProduct';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-form" element={<FormProduct />} />
          <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

