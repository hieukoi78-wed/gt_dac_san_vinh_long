import Product from '../models/Product.js';

// Lấy tất cả sản phẩm
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
  }
};

// Tạo sản phẩm mới
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi tạo sản phẩm" });
  }
};

// Lấy sản phẩm theo id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
  }
};

// Cập nhật sản phẩm theo id
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi cập nhật sản phẩm" });
  }
};

// Xóa sản phẩm theo id
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    res.json({ message: "Xóa sản phẩm thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi xóa sản phẩm" });
  }
};
