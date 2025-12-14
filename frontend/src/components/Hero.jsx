import hero from "../assets/anh1.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: 90,
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.3)),url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div>
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 800 }}>
          Đặc Sản <span style={{ color: "#f4c430" }}>Vĩnh Long</span>
        </h1>
        <p style={{ fontSize: 18, margin: "20px 0" }}>
          Tinh hoa miền Tây – chuẩn vị truyền thống
        </p>
        <button
          onClick={() => navigate("/san-pham")}
          style={{
            padding: "14px 36px",
            borderRadius: 999,
            fontWeight: 700,
            border: "none",
            background: "linear-gradient(135deg,#f4c430,#ffde59)",
            cursor: "pointer",
          }}
        >
          Xem sản phẩm
        </button>
      </div>
    </section>
  );
}
