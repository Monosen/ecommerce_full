const express = require('express')

const { renderIndex } = require('../controllers/views.controller')

const router = express.Router()

router.get('/:route', renderIndex)
// router.get("/auth", renderIndex);
// router.get("/add-product", renderIndex);
// router.get("/cart", renderIndex);
// router.get("/orders", renderIndex);
// router.get("/profile", renderIndex);
// router.get("/sales", renderIndex);

module.exports = { viewsRouter: router }
