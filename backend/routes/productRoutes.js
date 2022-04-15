import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../model/productModel.js'

//fetch all products
// GET api/products
// access - public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    //mongoose methods return a promise
    //to avoid using try catch for all routes,we use express-async-handler()
    const products = await Product.find({})
    res.json(products)
  }),
)

//fetch a single products
// GET api/products/:id
// access - public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  }),
)

export default router
