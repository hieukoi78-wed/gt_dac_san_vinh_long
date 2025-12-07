import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Products from "./components/Products";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main style={{ paddingTop: "100px" }}>
        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
              </>
            }
          />

          {/* Trang khác */}
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/gio-hang" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
