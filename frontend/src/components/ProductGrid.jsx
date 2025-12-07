import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ProductGrid({ products = [] }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Modal portal để luôn nổi trên header
  const Modal = ({ children, onClose }) =>
    ReactDOM.createPortal(
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20000, // cao hơn header
          padding: "20px",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "white",
            borderRadius: "12px",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            animation: "scaleIn 0.3s forwards",
          }}
        >
          {children}
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {/* Grid sản phẩm */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                {product.title}
              </h3>
              <p
                style={{ fontWeight: "700", color: "#e60023", margin: "6px 0" }}
              >
                {(product.price?.toLocaleString() || "0") + "₫"}
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "#e60023",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b5001a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#e60023")}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <div style={{ padding: "20px" }}>
            <h2>{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                margin: "10px 0",
                objectFit: "cover",
              }}
            />
            <p>
              <strong>Giá:</strong>{" "}
              {(selectedProduct.price?.toLocaleString() || "0") + "₫"}
            </p>
            <p>
              <strong>Xuất xứ:</strong> {selectedProduct.origin}
            </p>
            {selectedProduct.process && (
              <p>
                <strong>Quy trình:</strong> {selectedProduct.process}
              </p>
            )}
            <p>
              <strong>Mô tả:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {selectedProduct.rating} / 5
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                borderRadius: "8px",
                background: "#e60023",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </Modal>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
}
