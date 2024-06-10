const { v4: uuid } = require('uuid')
const Product = require('../database/Product')

async function getAllProducts() {
  try {
    const example =  await Product.getAllProducts()
    return example
  } catch (error) {
    throw error
  }
}

const getOneProduct = (ProductId) => {
  try {
    const Product = Product.getOneProduct(ProductId)
    return Product
  } catch (error) {
    throw error
  }
}

const createNewProduct = (newProduct) => {
  const ProductToInsert = {
    ...newProduct,
  }
  try {
    const createdProduct = Product.createNewProduct(ProductToInsert)
    return createdProduct
  } catch (error) {
    throw error
  }
}

const updateOneProduct = (ProductId, changes) => {
  try {
    const updatedProduct = Product.updateOneProduct(
      ProductId,
      changes,
    )
    return updatedProduct
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (ProductId) => {
  try {
    await Product.deleteProduct(ProductId)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteProduct,
}