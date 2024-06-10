const express = require('express')
const bodyParser = require('body-parser')

const { swaggerDocs: V1SwaggerDocs} = require('./v1/swagger')
const cors = require('cors')

const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
const v1ProductRouter = require('./v1/routes/productRoutes')
const v1CustomerRouter = require('./v1/routes/customerRoutes')
const v1EmployerRouter = require('./v1/routes/employerRoutes')
const v1OrderRouter = require('./v1/routes/orderRoutes')
const v1PickUpRouter = require('./v1/routes/pickUpRoutes')
const v1PvzEmployeesRouter = require('./v1/routes/pvzEmployees')
const v1SellerRouter = require('./v1/routes/sellerRoutes')

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use('/api/v1/workouts', v1WorkoutRouter)
app.use('/api/v1/products', v1ProductRouter)
app.use('/api/v1/customers', v1CustomerRouter)
app.use('/api/v1/employers', v1EmployerRouter)
app.use('/api/v1/orders', v1OrderRouter)
app.use('/api/v1/pick-up-items', v1PickUpRouter)
app.use('/api/v1/pvz-employees', v1PvzEmployeesRouter)
app.use('/api/v1/sellers', v1SellerRouter)

app.listen(PORT, () => {
  V1SwaggerDocs(app, PORT)
})

