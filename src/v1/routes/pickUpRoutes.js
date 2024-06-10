const express = require('express')
const router = express.Router()
const pickUpItemsController = require('../../controllers/pickUpItemsController')

router.get('/',  pickUpItemsController.getAllPickUps)

module.exports = router