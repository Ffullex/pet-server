const { v4: uuid } = require('uuid')
const Product = require('../database/Product')

async function getAllProducts() {
  console.log(222)
  try {
    const example =  await Product.getAllProducts()
    console.log(888, example)
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
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
    }),
    updatedAt: new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
    }),
  }
  try {
    const createdProduct = Product.createNewProduct(
      ProductToInsert,
    )
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

const deleteOneProduct = (ProductId) => {
  try {
    Product.deleteOneProduct(ProductId)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
}