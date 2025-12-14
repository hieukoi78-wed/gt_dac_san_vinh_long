import { useEffect, useState } from "react";
// BƯỚC 1: IMPORT useSearchParams để đọc tham số URL
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // BƯỚC 2: Đọc tham số category từ URL
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category'); // Lấy ra 'banh-ngot', 'dac-san', v.v.

  // Hàm chuyển đổi category ID thành tên hiển thị (Ví dụ: banh-ngot -> Bánh Ngọt)
  const getCategoryTitle = (id) => {
    switch (id) {
      case 'banh-ngot': return 'Bánh Ngọt';
      case 'dac-san': return 'Đặc Sản';
      case 'mon-an': return 'Món Ăn';
      default: return 'Tất Cả Sản Phẩm';
    }
  };
  
  const categoryTitle = getCategoryTitle(categoryId);

  useEffect(() => {
    setLoading(true);
    setError("");

    // BƯỚC 3: Xây dựng URL API dựa trên categoryId
    let apiUrl = "http://localhost:5001/api/products";
    
    // Nếu có category ID, thêm nó vào đường dẫn API
    if (categoryId) {
      apiUrl = `http://localhost:5001/api/products/${categoryId}`;
      console.log(`Đang tải sản phẩm cho danh mục: ${categoryId} từ API: ${apiUrl}`);
    } else {
      console.log(`Đang tải TẤT CẢ sản phẩm từ API: ${apiUrl}`);
    }

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Không lấy được dữ liệu");
        return res.json();
      })
      .then((data) => {
        // Nếu API trả về mảng rỗng, đây là trường hợp bình thường
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Không thể tải sản phẩm. Kiểm tra kết nối API.");
        setLoading(false);
        setProducts([]); // Đảm bảo mảng rỗng khi có lỗi
      });
  // BƯỚC 4: useEffect sẽ chạy lại mỗi khi categoryId thay đổi
  }, [categoryId]); 

  return (
    <section
      style={{
        paddingTop: 120,
        paddingBottom: 60,
        paddingInline: 16,
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      {/* TIÊU ĐỀ ĐÃ SỬA ĐỔI ĐỂ HIỂN THỊ DANH MỤC */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(1.6rem,4vw,2.2rem)",
          fontWeight: 800,
          marginBottom: 10,
        }}
      >
        🧺 {categoryTitle} Vĩnh Long
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: 30,
        }}
      >
        {categoryTitle === 'Tất Cả Sản Phẩm' 
            ? 'Tuyển chọn tinh hoa miền Tây – chuẩn vị truyền thống'
            : `Các sản phẩm tiêu biểu thuộc danh mục ${categoryTitle}`}
      </p>

      {/* TRẠNG THÁI */}
      {loading && (
        <p style={{ textAlign: "center" }}>⏳ Đang tải sản phẩm...</p>
      )}

      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}
      
      {/* Hiển thị thông báo nếu không tìm thấy sản phẩm */}
      {!loading && !error && products.length === 0 && (
          <p style={{ textAlign: "center", color: "#888" }}>Không tìm thấy sản phẩm nào trong danh mục này.</p>
      )}

      {/* GRID SẢN PHẨM */}
      {!loading && !error && products.length > 0 && <ProductGrid products={products} />}
    </section>
  );
}