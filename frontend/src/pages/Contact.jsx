import React, { useState } from "react";
import mapImg from "../assets/anh11.jpg"; // Ảnh địa chỉ map

export default function Contact() {
  const [active, setActive] = useState(null); // popup hiển thị mục nào

  const boxStyle = {
    padding: "20px",
    borderRadius: "12px",
    background: "white",
    marginBottom: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const popupStyle = {
    padding: "15px",
    background: "#f7f7f7",
    borderRadius: "10px",
    marginTop: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  };

  return (
    <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* TIÊU ĐỀ */}
      <h1
        style={{
          fontSize: "2.4rem",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          color: "#ff5722",
        }}
      >
        📞 Liên Hệ Với Chúng Tôi
      </h1>

      {/* MÔ TẢ */}
      <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.1rem" }}>
        Chọn phương thức liên hệ bên dưới để xem chi tiết ›››
      </p>

      {/* HOTLINE */}
      <div style={boxStyle} onClick={() => setActive(active === "hotline" ? null : "hotline")}>
        <strong>📱 Hotline</strong>
        {active === "hotline" && (
          <div style={popupStyle}>
            <p>SĐT hỗ trợ: <b>0961 427 055</b></p>
            <p>Bấm vào đây để gọi ngay:</p>
            <a href="tel:0961427055" style={{ color: "#ff5722", fontWeight: "bold" }}>
              Gọi 0961.427.055
            </a>
          </div>
        )}
      </div>

      {/* EMAIL */}
      <div style={boxStyle} onClick={() => setActive(active === "email" ? null : "email")}>
        <strong>📧 Email</strong>
        {active === "email" && (
          <div style={popupStyle}>
            <p>Email hỗ trợ: <b>hieukoi78@gmail.com</b></p>
            <a
              href="mailto:support@example.com"
              style={{ color: "#ff5722", fontWeight: "bold" }}
            >
              Gửi email
            </a>
          </div>
        )}
      </div>

      {/* FACEBOOK */}
      <div style={boxStyle} onClick={() => setActive(active === "fb" ? null : "fb")}>
        <strong>📘 Facebook</strong>
        {active === "fb" && (
          <div style={popupStyle}>
            <p>Trang fanpage chính thức:</p>
            <a
              href="https://www.facebook.com/share/17fhQdyBcf/"
              target="_blank"
              style={{ color: "#1877f2", fontWeight: "700" }}
            >
              Mở Fanpage
            </a>
          </div>
        )}
      </div>

      {/* ĐỊA CHỈ */}
      <div style={boxStyle} onClick={() => setActive(active === "map" ? null : "map")}>
        <strong>📍 Địa chỉ</strong>
        {active === "map" && (
          <div style={popupStyle}>
            <p>
              <b>Vũng Liêm, Vĩnh Long</b>
            </p>

            {/* ẢNH GOOGLE MAP */}
            <img
              src={mapImg}
              alt="Google Map Vũng Liêm"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginTop: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
