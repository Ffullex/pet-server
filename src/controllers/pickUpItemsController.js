const pickUpService = require('../services/pickUpItemsService')

const getAllPickUps = async (req, res) =>  {
  try {
    const allProducts = await pickUpService.getAllPickUps()
    res.send({ status: 'OK', data: allProducts })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getAllPickUps,
}