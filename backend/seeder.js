import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();



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
