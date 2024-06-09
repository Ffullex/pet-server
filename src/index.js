const express = require('express')
const bodyParser = require('body-parser')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
const { swaggerDocs: V1SwaggerDocs} = require('./v1/swagger')
const cors = require('cors')
const postgreSql = require('pg')

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

app.listen(PORT, () => {
  console.log(`API is listening on port ${ PORT }`)
  /// *** ADD ***
  V1SwaggerDocs(app, PORT)
})

// Подключение к БД
const { Client } = postgreSql
const client = new Client({
  host: 'localhost',
  port: 5433,
  database: 'exampledb',
  user: 'postgres',
  password: 'asd123ASD',
})

// параметры для получения списка продуктов
const getProducts = {
  text: 'SELECT *  FROM  products',
}

// параметры для добавления продукта
// const newProduct = {
//   text: 'INSERT INTO products(image, name, price) VALUES($1, $2, $3)',
//   values: ['example2', 'product2', 123],
// }

client.connect(async (err) => {
  const example = await client.query(getProducts)
  console.log(example)
  client.end()
})

