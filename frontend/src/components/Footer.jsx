import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: "1rem" }}>
        © 2025 GT Đặc Sản Vĩnh Long. All Rights Reserved.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          fontSize: "1.2rem",
        }}
      >
        <a
          href="https://www.facebook.com/share/17fhQdyBcf/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.2rem 0.5rem",
            borderRadius: "5px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          Facebook
        </a>

        <a
          href="mailto:hieukoi78@gmail.com"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.2rem 0.5rem",
            borderRadius: "5px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          Email
        </a>
      </div>
    </footer>
  );
}
