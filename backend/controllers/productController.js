// controllers/productController.js
import Product from '../models/Product.js';

// GET all
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
  }
};

// POST create
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi tạo sản phẩm" });
  }
};

// GET by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
  }
};

// PUT update
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi cập nhật sản phẩm" });
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed)
      return res.status(404).json({ message: "Sản phẩm không tồn tại" });

    res.json({ message: "Xóa sản phẩm thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi xóa sản phẩm" });
  }
};
