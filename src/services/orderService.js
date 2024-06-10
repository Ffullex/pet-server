const { v4: uuid } = require('uuid')
const Order = require('../database/Order')

const getAllOrders = async () => {
  try {
    const example =  await Order.getAllOrders()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllOrders,
}