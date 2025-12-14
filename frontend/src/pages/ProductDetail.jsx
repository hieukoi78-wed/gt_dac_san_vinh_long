import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p style={{ padding: 40 }}>Đang tải...</p>;

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "auto",
        padding: "120px 16px 60px",
      }}
    >
      {/* TOP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 40,
          alignItems: "flex-start",
        }}
      >
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            maxWidth: 360,   // 👈 GIỚI HẠN ẢNH
            height: 260,     // 👈 KHÔNG PHÓNG TO
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,.15)",
          }}
        />

        {/* INFO */}
        <div>
          <h1 style={{ fontSize: 26 }}>{product.title}</h1>

          <strong
            style={{
              fontSize: 24,
              color: "#f4c430",
              display: "block",
              margin: "10px 0 16px",
            }}
          >
            {product.price.toLocaleString()}đ
          </strong>

          <p style={{ lineHeight: 1.7 }}>{product.description}</p>

          <ul style={{ marginTop: 14, lineHeight: 1.8 }}>
            <li><b>Xuất xứ:</b> {product.origin}</li>
            <li><b>Danh mục:</b> {product.category}</li>
            <li><b>Quy trình:</b> {product.process}</li>
          </ul>

          <button
            style={{
              marginTop: 24,
              padding: "14px 34px",
              borderRadius: 999,
              border: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#f4c430,#ffde59)",
              cursor: "pointer",
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </section>
  );
}
