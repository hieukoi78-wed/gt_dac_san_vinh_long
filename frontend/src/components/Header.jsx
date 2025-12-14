import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo1.jpg";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState("");

  const menu = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
    { label: "Sản phẩm", path: "/san-pham" },
    { label: "Tin tức", path: "/tin-tuc" },
    { label: "Liên hệ", path: "/lien-he" },
    { label: "Giỏ hàng", path: "/gio-hang" },
  ];

  const submitSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    navigate(`/san-pham?search=${keyword}`);
    setKeyword("");
    setShowSearch(false);
    setOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "#1c1c1c",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          padding: "14px 20px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* LOGO */}
        <Link to="/" style={{ display: "flex", gap: 10 }}>
          <img src={logo} alt="" style={{ width: 42, borderRadius: 8 }} />
          <strong style={{ color: "#fff" }}>Đặc Sản Vĩnh Long</strong>
        </Link>

        {/* SEARCH (DESKTOP) */}
        <form onSubmit={submitSearch} className="search-desktop">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm đặc sản..."
            style={{
              width: "100%",
              maxWidth: 360,
              padding: "10px 16px",
              borderRadius: 999,
              border: "none",
              outline: "none",
            }}
          />
        </form>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* SEARCH ICON MOBILE */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="search-mobile"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 20,
            }}
          >
            🔍
          </button>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-btn"
            style={{
              fontSize: 26,
              color: "#fff",
              background: "none",
              border: "none",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* SEARCH MOBILE */}
      {showSearch && (
        <form
          onSubmit={submitSearch}
          style={{
            padding: "12px 20px",
            background: "#111",
          }}
        >
          <input
            autoFocus
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm đặc sản Vĩnh Long..."
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 999,
              border: "none",
            }}
          />
        </form>
      )}

      {/* DESKTOP MENU */}
      <nav
        className="desktop-menu"
        style={{
          maxWidth: 1200,
          margin: "auto",
          padding: "0 20px 14px",
        }}
      >
        {menu.map((m) => (
          <Link
            key={m.path}
            to={m.path}
            style={{
              marginRight: 24,
              color: pathname === m.path ? "#f4c430" : "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {m.label}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          style={{
            background: "#111",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {menu.map((m) => (
            <Link
              key={m.path}
              to={m.path}
              onClick={() => setOpen(false)}
              style={{ color: "#fff", fontSize: 18 }}
            >
              {m.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
