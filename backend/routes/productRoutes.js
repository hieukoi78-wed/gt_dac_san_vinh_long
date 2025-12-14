// routes/productRoutes.js
import express from 'express';
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

const validateProduct = (req, res, next) => {
  const { title, category, image, price } = req.body;

  if (!title || !category || !image || price === undefined) {
    return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin" });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: "Giá sản phẩm phải là số dương" });
  }

  next();
};

router.get('/', getProducts);
router.post('/', validateProduct, createProduct);
router.get('/:id', getProductById);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

export default router;
