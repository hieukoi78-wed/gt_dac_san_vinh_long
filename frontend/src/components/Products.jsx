import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/products");
        if (!res.ok) throw new Error("Không thể lấy sản phẩm từ server");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section style={{ paddingTop: "120px", padding: "0 20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Sản Phẩm Nổi Bật
      </h2>

      {loading && <p style={{ textAlign: "center" }}>Đang tải sản phẩm...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && !error && <ProductGrid products={products} />}
    </section>
  );
}
