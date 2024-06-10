const employerService = require('../services/employerService')

const getAllEmployers = async (req, res) =>  {
  try {
    const allProducts = await employerService.getAllEmployers()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllEmployers,
}