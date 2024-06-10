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
async function createNewProduct(req, res) {
  try {
    const { body } = req
    const allProducts = await productService.createNewProduct(body)
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

async function deleteProduct(req, res) {
  try {
    const {
      params: { id },
    } = req
    console.log(5555, id)
    if ( !id) {
      res.status(400).send({
        status: 'FAILED',
        data: {
          error:
            'Parameter \':workoutId\' can not be empty',
        },
      })
    }
    await productService.deleteProduct(id)
    res.status(204).send({ status: 'OK' })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProduct,
}