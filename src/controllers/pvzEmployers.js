const pvzEmployerService = require('../services/pvzEmployersService')

const getAllPvzEmployees = async (req, res) =>  {
  try {
    const allProducts = await pvzEmployerService.getAllPvzEmployees()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllPvzEmployees,
}