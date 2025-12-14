import { useNavigate } from "react-router-dom";

export default function ProductGrid({ products }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 24,
        marginTop: 24,
      }}
    >
      {products.map((p) => (
        <div
          key={p._id}
          onClick={() => navigate(`/san-pham/${p._id}`)}
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 16,
            cursor: "pointer",
            boxShadow: "0 8px 22px rgba(0,0,0,.1)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <img
            src={p.image}
            alt={p.title}
            style={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              borderRadius: 14,
            }}
          />
          <h3 style={{ margin: "12px 0" }}>{p.title}</h3>
          <strong style={{ color: "#f4c430" }}>
            {p.price.toLocaleString()}đ
          </strong>
        </div>
      ))}
    </div>
  );
}
