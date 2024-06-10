const express = require('express')
const router = express.Router()
const sellerController = require('../../controllers/sellerController')

router.get('/',  sellerController.getAllSellers)

module.exports = router