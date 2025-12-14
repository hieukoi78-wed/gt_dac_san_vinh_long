import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();

/* ================== DỮ LIỆU SẢN PHẨM ================== */
const products = [
  {
    _id: "sp001",
    title: "Bánh Pía Vĩnh Long",
    category: "Bánh Ngọt",
    image: "/assets/anh7.jpg",
    description: "Bánh pía truyền thống với nhân sầu riêng, trứng muối.",

    detail:
      "Bánh pía Vĩnh Long được làm từ bột mì cao cấp, nhân sầu riêng chín tự nhiên kết hợp trứng muối, mang hương vị béo thơm đặc trưng miền Tây.",

    info:
      "Sản phẩm làm thủ công, không chất bảo quản, phù hợp làm quà biếu và sử dụng hằng ngày.",

    usage:
      "Dùng trực tiếp sau khi mở bao bì. Ngon hơn khi dùng kèm trà nóng. Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp.",

    origin: "Vĩnh Long",
    process: "Làm thủ công theo công thức gia truyền",
    price: 50000,
    rating: 5,
    sold: 0,
  },

  {
    _id: "sp002",
    title: "Rượu Xuân Thạnh",
    category: "Đặc sản",
    image: "/assets/anh13.jpg",
    description: "Rượu Xuân Thạnh truyền thống nổi tiếng Vĩnh Long.",

    detail:
      "Rượu Xuân Thạnh được nấu từ gạo ngon địa phương, ủ men tự nhiên, hương thơm nồng và vị êm dịu.",

    info:
      "Rượu truyền thống miền Tây, độ cồn vừa phải, được nhiều du khách lựa chọn làm quà.",

    usage:
      "Uống trực tiếp với lượng vừa phải. Ngon hơn khi uống lạnh hoặc dùng kèm các món ăn dân dã.",

    origin: "Vĩnh Long",
    process: "Ủ men tự nhiên hơn 6 tháng",
    price: 120000,
    rating: 5,
    sold: 0,
  },

  {
    _id: "sp003",
    title: "Kẹo Dừa ",
    category: "Đặc sản",
    image: "/assets/anh14.jpg",
    description: "Bộ ba đặc sản nổi tiếng miền Tây.",

    detail:
      "kẹo dừa đạt chuẩn nhân sầu riêng không chất bảo quản.",

    info:
      "Sản phẩm được đóng gói sạch sẽ, phù hợp cho du lịch và thưởng thức cùng gia đình.",

    usage:
      "Dùng trực tiếp. Ngon hơn khi hâm nóng các món nướng trước khi ăn.",

    origin: "Vĩnh Long",
    process: "Chế biến thủ công, đảm bảo vệ sinh",
    price: 80000,
    rating: 5,
    sold: 0,
  },

  {
    _id: "sp004",
    title: "Bánh Xèo Hến Cù Lao Dài",
    category: "Món Ăn",
    image: "/assets/anh15.jpg",
    description: "Bánh xèo làm từ hến tươi của Cù Lao Dài.",

    detail:
      "Bánh xèo giòn rụm, nhân hến tươi đánh bắt trong ngày, ăn kèm rau sống và nước mắm chua ngọt.",

    info:
      "Đặc sản dân dã miền sông nước, phù hợp dùng nóng để cảm nhận trọn vị ngon.",

    usage:
      "Dùng nóng ngay sau khi chế biến. Ngon hơn khi ăn kèm rau sống và nước mắm pha.",

    origin: "Vĩnh Long",
    process: "Hến tươi đánh bắt trong ngày",
    price: 45000,
    rating: 5,
    sold: 0,
  },

  {
    _id: "sp005",
    title: "Bánh Tét Trà Cuôn",
    category: "Bánh Tét",
    image: "/assets/anh16.jpg",
    description: "Đặc sản bánh tét nổi tiếng Trà Cuôn.",

    detail:
      "Bánh tét nhân đậu xanh, thịt mỡ, gạo nếp dẻo thơm, gói lá chuối truyền thống.",

    info:
      "Bánh tét Trà Cuôn nổi tiếng khắp miền Tây, thường dùng trong dịp lễ Tết.",

    usage:
      "Cắt khoanh và dùng trực tiếp. Có thể chiên lại để bánh giòn ngon hơn.",

    origin: "Trà Vinh",
    process: "Gói lá chuối, nấu củi truyền thống",
    price: 60000,
    rating: 5,
    sold: 0,
  },
];

/* ================== IMPORT DATA ================== */
const importData = async () => {
  try {
    await connectDB();
    console.log("🔗 Kết nối DB thành công!");

    await Product.deleteMany();
    console.log("🗑️ Đã xoá toàn bộ sản phẩm cũ.");

    await Product.insertMany(products);
    console.log("✅ Dữ liệu mới đã được import thành công!");

    process.exit();
  } catch (error) {
    console.error("❌ Lỗi khi import:", error);
    process.exit(1);
  }
};

importData();
