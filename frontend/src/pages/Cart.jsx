import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../assets/anh12.jpg";

export default function Cart() {
  const cartItems = []; // sau này thay bằng dữ liệu API hoặc context

  const container = {
    padding: "120px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <div style={container}>
      {/* TIÊU ĐỀ */}
      <h1
        style={{
          fontSize: "2.6rem",
          fontWeight: "800",
          marginBottom: "25px",
          textAlign: "center",
          color: "#ff4d4d",
          textShadow: "0 3px 10px rgba(0,0,0,0.3)",
        }}
      >
        🛒 Giỏ Hàng
      </h1>

      {/* TRƯỜNG HỢP GIỎ HÀNG TRỐNG */}
      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px 20px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <img
            src={emptyCartImg}
            alt="Giỏ hàng trống"
            style={{
              width: "260px",
              marginBottom: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />

          <h2 style={{ fontSize: "1.6rem", fontWeight: "800" }}>
            Giỏ hàng của bạn đang trống!
          </h2>

          <p style={{ marginTop: "10px", fontSize: "1rem", color: "#444" }}>
            Hãy thêm các sản phẩm đặc sản để bắt đầu mua sắm nhé.
          </p>

          {/* NÚT CHUYỂN TRANG */}
          <Link
            to="/products"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "14px 28px",
              background: "#ff4d4d",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "700",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "0.3s",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e60000")}
            onMouseOut={(e) => (e.target.style.background = "#ff4d4d")}
          >
            ➕ Mua sắm ngay
          </Link>
        </div>
      ) : (
        <>
          {/* DANH SÁCH SẢN PHẨM (nếu có) */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                background: "white",
                padding: "18px",
                borderRadius: "14px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginRight: "20px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700" }}>
                  {item.name}
                </h3>
                <p style={{ color: "#333", marginTop: "5px" }}>
                  Giá: {item.price.toLocaleString()} đ
                </p>
              </div>

              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                x{item.quantity}
              </span>
            </div>
          ))}

          {/* TỔNG TIỀN */}
          <div
            style={{
              background: "white",
              padding: "25px",
              marginTop: "30px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Tổng tiền</h3>

            <p
              style={{
                fontSize: "1.7rem",
                fontWeight: "900",
                color: "#d84315",
                marginTop: "12px",
              }}
            >
              0 đ
            </p>

            <button
              style={{
                width: "100%",
                padding: "16px",
                background: "#e53935",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "800",
                border: "none",
                borderRadius: "14px",
                cursor: "pointer",
                marginTop: "18px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#c62828")}
              onMouseOut={(e) => (e.target.style.background = "#e53935")}
            >
              💳 Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}
