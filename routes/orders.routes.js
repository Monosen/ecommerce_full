const express = require("express");

// Controllers
const {
	addProductToCart,
	getUserCart,
	updateProductCart,
	purchaseOrder,
	getAllOrders,
	getOrderById,
	disableProductToCart,
} = require("../controllers/orders.controller");

// Middlewares
const {
	updateProductCartValidations,
	validateResult,
} = require("../middlewares/validators.middleware");
const { protectSession } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protectSession);

// Get user's orders
router.get("/", getAllOrders);

// Get user's cart
router.get("/get-cart", getUserCart);

// Add product to cart
router.post("/add-product-to-cart", addProductToCart);

// Update cart product quantity
router.patch(
	"/update-cart-product",
	updateProductCartValidations,
	validateResult,
	updateProductCart
);

// Remove product from cart
router.delete("/product/:id", disableProductToCart);

// Create order
router.get("/purchase-order", purchaseOrder);

router.get("/:id", getOrderById);

module.exports = { ordersRouter: router };
