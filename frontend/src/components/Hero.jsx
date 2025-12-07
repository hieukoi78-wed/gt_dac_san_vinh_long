import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/anh1.jpg";
import img2 from "../assets/anh2.jpg";
import img3 from "../assets/anh3.jpg";
import img4 from "../assets/anh4.jpg";
import img5 from "../assets/anh5.jpg";

export default function Hero() {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4, img5];

  const [bgImage, setBgImage] = useState(img1);
  const [hovered, setHovered] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // ⭐ Auto slide mỗi 5 giây
  useEffect(() => {
    if (hovered !== null) return; // đang hover → không auto đổi

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        let newIndex = (prevIndex + 1) % images.length;
        setBgImage(images[newIndex]);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [hovered]);

  const heroStyle = {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "7rem 1rem 3rem 1rem",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    color: "white",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.7s ease-in-out",
  };

  const baseImgStyle = {
    width: "260px",
    height: "160px",
    borderRadius: "16px",
    objectFit: "cover",
    transition: "all .35s ease",
    cursor: "pointer",
  };

  return (
    <section id="hero" style={heroStyle}>
      {/* Overlay vàng nhè nhẹ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,200,0,0.25)",
          animation: "pulseOverlay 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Nội dung */}
      <div style={{ maxWidth: "800px", position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Khám Phá <span style={{ color: "#fff700" }}>Đặc Sản Vĩnh Long</span>
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Những sản phẩm tinh túy mang hương vị đặc trưng miền Tây.
        </p>

        <button
          onClick={() => navigate("/san-pham")}
          style={{
            backgroundColor: "#fff700",
            color: "#000",
            padding: "0.85rem 2.2rem",
            borderRadius: "9999px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            transition: "0.25s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.07)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Xem Sản Phẩm
        </button>
      </div>

      {/* Ảnh điều khiển nền */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        {images.map((img, index) => {
          const isHovered = hovered === index;

          const style = {
            ...baseImgStyle,
            opacity: hovered === null ? 1 : isHovered ? 1 : 0.45,
            transform: isHovered ? "scale(1.15) translateY(-8px)" : "scale(1)",
            boxShadow: isHovered
              ? "0 10px 25px rgba(0,0,0,0.5)"
              : "0 4px 12px rgba(0,0,0,0.3)",
          };

          return (
            <img
              key={index}
              src={img}
              alt="Thumb"
              style={style}
              onMouseEnter={() => {
                setHovered(index);
                setBgImage(img);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setBgImage(images[slideIndex]);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
