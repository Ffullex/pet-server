const { v4: uuid } = require('uuid')
const PvzEmployer = require('../database/PvzEmployer')

const getAllPvzEmployees = async () => {
  try {
    const example =  await PvzEmployer.getAllPvzEmployees()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPvzEmployees,
}