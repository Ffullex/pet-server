const { v4: uuid } = require('uuid')
const Employer = require('../database/Employer')

const getAllEmployers = async () => {
  try {
    const example =  await Employer.getAllEmployers()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllEmployers,
}