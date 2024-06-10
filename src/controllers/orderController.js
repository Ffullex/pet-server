const orderService = require('../services/orderService')

const getAllOrders = async (req, res) =>  {
  try {
    const allProducts = await orderService.getAllOrders()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllOrders,
}