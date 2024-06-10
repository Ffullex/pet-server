const { v4: uuid } = require('uuid')
const PickUpPoint = require('../database/PickUpPoint')

const getAllPickUps = async () => {
  try {
    const example =  await PickUpPoint.getAllPickUpPoints()
    return example
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPickUps,
}