const sellerService = require('../services/sellerService')

const getAllSellers = async (req, res) =>  {
  try {
    const allProducts = await sellerService.getAllSellers()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllSellers,
}