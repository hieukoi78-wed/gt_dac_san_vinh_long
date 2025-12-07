import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import bgHeader from "../assets/anh6.jpg";
import logo from "../assets/logo1.jpg";
import { PRODUCTS } from "../data/products";

export default function Header() {
  const [opacity, setOpacity] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // Hiệu ứng mờ header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isSearchFocus) {
        const newOpacity = Math.max(1 - window.scrollY / 400, 0.4);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearchFocus]);

  // Lọc sản phẩm theo từ khóa
  useEffect(() => {
    if (searchText.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSuggestions(filtered);
  }, [searchText]);

  const handleSelectProduct = (id) => {
    navigate("/san-pham");
    setSearchText("");
    setSuggestions([]);
  };

  const menuLinks = [
    { label: "🏠 Trang chủ", path: "/" },
    { label: "⭐ Giới thiệu", path: "/gioi-thieu" },
    { label: "📦 Sản phẩm", path: "/san-pham" },
    { label: "📞 Liên hệ", path: "/lien-he" },
    { label: "📝 Tin tức", path: "/tin-tuc" },
    { label: "🛒 Giỏ hàng", path: "/gio-hang" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backgroundImage: `url(${bgHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "12px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        opacity: isSearchFocus ? 1 : opacity,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={logo}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <h2 style={{ color: "white", fontSize: "1.4rem", fontWeight: "bold" }}>
          Đặc Sản Vĩnh Long
        </h2>
      </div>

      {/* SEARCH */}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsSearchFocus(true)}
          onBlur={() => setTimeout(() => setIsSearchFocus(false), 200)}
          style={{
            padding: "10px 18px",
            borderRadius: "22px",
            width: "300px",
            background: "rgba(255,255,255,0.8)",
            border: "1px solid #ddd",
            outline: "none",
          }}
        />

        {/* Gợi Ý */}
        {isSearchFocus && suggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "48px",
              width: "100%",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              overflow: "hidden",
              zIndex: 9999,
            }}
          >
            {suggestions.map((item) => (
              <div
                key={item.id}
                onMouseDown={() => handleSelectProduct(item.id)}
                style={{
                  padding: "12px 15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MENU DROPDOWN */}
      <div style={{ position: "relative" }}>
        {/* Nút mở menu */}
        <nav
          onClick={() => setOpenMenu(!openMenu)}
          style={{
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
            padding: "10px 16px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            transition: "0.25s",
            userSelect: "none",
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "rgba(255,255,255,0.25)")
          }
          onMouseLeave={(e) =>
            (e.target.style.background = "rgba(255,255,255,0.15)")
          }
        >
          Menu ▾
        </nav>

        {/* DROPDOWN */}
        {openMenu && (
          <div
            style={{
              position: "absolute",
              right: 0,
              marginTop: "12px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
              overflow: "hidden",
              animation: "fadeIn 0.25s ease",
              minWidth: "220px",
              zIndex: 9999,
            }}
          >
            {menuLinks.map((item, i) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  to={item.path}
                  key={i}
                  onClick={() => setOpenMenu(false)}
                  style={{
                    display: "block",
                    padding: "14px 20px",
                    textDecoration: "none",
                    color: isActive ? "#0d6efd" : "#333",
                    fontWeight: isActive ? "700" : "600",
                    borderLeft: isActive ? "4px solid #0d6efd" : "4px solid transparent",
                    background: isActive ? "#f0f6ff" : "transparent",
                    transition: "0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#f0f0f0";
                    e.target.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = isActive ? "#f0f6ff" : "transparent";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
