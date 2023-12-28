import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { ProductsDetailPage } from "./pages/ProductsDetailPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { CheckoutPage } from "./pages/CheckoutPage.jsx";
import ProductsProvider from "./context/ProductsContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route path="/checkout" element={<CheckoutPage />}></Route>
              <Route path="/products/:id" element={<ProductsDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
