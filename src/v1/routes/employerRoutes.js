const express = require('express')
const router = express.Router()
const employerController = require('../../controllers/employerController')

router.get('/',  employerController.getAllEmployers)

module.exports = router