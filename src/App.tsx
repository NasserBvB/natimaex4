import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import './global.css';
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
function App() {
  return (
    <RecoilRoot>
        <Router>
          <Routes>
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route
              path="/categories"
              element={<CategoriesPage />}
            />
            <Route path="/" element={<ProductListPage />} />
          </Routes>
        </Router>
    </RecoilRoot>
  );
}

export default App;
