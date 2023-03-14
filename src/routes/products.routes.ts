import express from 'express'
import controller from '../services/products/products.controller'

const router = express.Router();

router.get('/get', controller.getProducts)
router.get('/create', controller.createProduct)


export = router;