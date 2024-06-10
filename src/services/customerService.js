const { v4: uuid } = require('uuid')
const Customer = require('../database/Customer')

const getAllCustomers = async () => {
  try {
    const example =  await Customer.getAllCustomers()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllCustomers,
}