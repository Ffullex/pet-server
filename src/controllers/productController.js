const productService = require('../services/productService')

async function getAllProducts(req, res) {
  try {
    const allProducts = await productService.getAllProducts()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllProducts,
}