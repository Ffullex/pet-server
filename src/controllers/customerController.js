const customerService = require('../services/customerService')

const getAllCustomers = async (req, res) =>  {
  try {
    const allProducts = await customerService.getAllCustomers()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllCustomers,
}