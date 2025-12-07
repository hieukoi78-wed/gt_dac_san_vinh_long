import React, { useState } from "react";

import anh8 from "../assets/anh8.jpg";
import anh9 from "../assets/anh9.jpg";
import anh10 from "../assets/anh10.jpg";

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    {
      id: 1,
      title: "Khai mạc Lễ hội trái cây Việt Nam 2025",
      date: "07/12/2025",
      image: anh8,
      description: "Lễ hội trái cây lớn nhất Việt Nam đã khai mạc...",
      full: "Lễ hội trái cây Việt Nam 2025 được tổ chức quy mô lớn..."
    },
    {
      id: 2,
      title: "Đặc sản Vĩnh Long lọt top 10 sản phẩm nổi bật",
      date: "05/12/2025",
      image: anh9,
      description: "Bánh pía và nem nướng được vinh danh...",
      full: "Các đặc sản Vĩnh Long tiếp tục khẳng định thương hiệu..."
    },
    {
      id: 3,
      title: "Xu hướng quà tết 2026: Đặc sản vùng miền lên ngôi",
      date: "03/12/2025",
      image: anh10,
      description: "Người tiêu dùng ưu tiên sản phẩm tự nhiên...",
      full: "Xu hướng quà tết năm 2026 nghiêng về thực phẩm sạch..."
    }
  ];

  return (
    <div style={{ padding: "120px 20px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
        📝 Tin Tức Mới Nhất
      </h1>

      {/* LIST TIN TỨC */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}
      >
        {newsList.map((news) => (
          <div
            key={news.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              padding: "15px"
            }}
          >
            <img
              src={news.image}
              alt={news.title}
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{news.title}</h3>
            <p style={{ color: "gray", fontSize: "0.9rem" }}>{news.date}</p>
            <p>{news.description}</p>

            <button
              onClick={() => setSelectedNews(news)}
              style={{
                marginTop: "10px",
                background: "#ffcc00",
                padding: "8px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>

      {/* POPUP HIỂN THỊ CHI TIẾT */}
      {selectedNews && (
        <div
          onClick={() => setSelectedNews(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "20px",
              width: "90%",
              maxWidth: "550px",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
            }}
          >
            <img
              src={selectedNews.image}
              alt=""
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />

            <h2 style={{ marginTop: "15px" }}>{selectedNews.title}</h2>
            <p style={{ color: "gray" }}>{selectedNews.date}</p>
            <p style={{ marginTop: "10px" }}>{selectedNews.full}</p>

            <button
              onClick={() => setSelectedNews(null)}
              style={{
                marginTop: "15px",
                width: "100%",
                background: "#ffcc00",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
