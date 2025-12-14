import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import trực tiếp HomeComponent
import HomeComponent from "./components/HomeComponent.jsx";

import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Routes>
          {/* Render HomeComponent trực tiếp */}
          <Route path="/" element={<HomeComponent />} />
          
          {/* Đã sửa đổi: Thêm route "/products" để khớp với đường dẫn trên Home Component */}
          <Route path="/products" element={<Products />} /> 

          {/* Giữ lại route tiếng Việt như alias, nhưng bạn nên thống nhất dùng 1 tên */}
          <Route path="/san-pham" element={<Products />} /> 

          <Route path="/gioi-thieu" element={<About />} />
          
          <Route path="/san-pham/:id" element={<ProductDetail />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gio-hang" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}