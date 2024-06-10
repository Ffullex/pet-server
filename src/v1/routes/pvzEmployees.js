const express = require('express')
const router = express.Router()
const pvzEmployeesController = require('../../controllers/pvzEmployers')

router.get('/',  pvzEmployeesController.getAllPvzEmployees)

module.exports = router