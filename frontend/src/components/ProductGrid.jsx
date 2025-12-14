import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductGrid({ products = [] }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
        gap: 20,
      }}
    >
      {products.map((p) => (
        <motion.div
          key={p._id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => navigate(`/san-pham/${p._id}`)}
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 14,
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,0,0,.1)",
          }}
        >
          <img
            src={p.image}
            alt={p.title}
            style={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />

          <h3
            style={{
              margin: "10px 0",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {p.title}
          </h3>

          <strong style={{ color: "#f4c430", fontSize: 15 }}>
            {p.price.toLocaleString()}đ
          </strong>
        </motion.div>
      ))}
    </motion.div>
  );
}
