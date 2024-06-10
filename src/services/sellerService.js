const { v4: uuid } = require('uuid')
const seller = require('../database/Seller')

const getAllSellers = async () => {
  try {
    const example =  await seller.getAllSellers()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSellers,
}