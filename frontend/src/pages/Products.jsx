import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import logo from "../assets/logo1.jpg";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Tự đổi màu chữ mỗi 1 giây
  useEffect(() => {
    const colors = ["#ff0000", "#00ff90", "#00a2ff", "#ff00ea", "#ffaa00"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setColor(colors[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ paddingTop: "120px" }}>
      <div 
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px"
        }}
      >
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        {/* Chữ đổi màu tự động */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            color: color, // <- màu đổi liên tục
            transition: "color 1s linear"
          }}
        >
          Sản Phẩm đặc sản 
        </h2>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
