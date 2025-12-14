export default function Footer() {
  return (
    <footer style={{ background: "#1c1c1c", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          padding: "50px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 30,
        }}
      >
        <div>
          <h4>Đặc Sản Vĩnh Long</h4>
          <p>Gìn giữ tinh hoa miền Tây</p>
        </div>

        <div>
          <h4>Liên hệ</h4>
          <p>Email: hieukoi78@gmail.com</p>
        </div>

        <div>
          <h4>Hỗ trợ</h4>
          <p>Chính sách & vận chuyển</p>
        </div>
      </div>

      <div
        style={{
          background: "#f4c430",
          textAlign: "center",
          padding: 12,
          fontWeight: 600,
          color: "#000",
        }}
      >
        © 2025 Đặc Sản Vĩnh Long
      </div>
    </footer>
  );
}
