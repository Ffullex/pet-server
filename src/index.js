const express = require('express')
const bodyParser = require('body-parser')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
const v1ProductRouter = require('./v1/routes/productRoutes')
const { swaggerDocs: V1SwaggerDocs} = require('./v1/swagger')
const cors = require('cors')

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

app.listen(PORT, () => {
  V1SwaggerDocs(app, PORT)
})

