const cors = require('cors')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(express.json())

app.use(function(error, request, response, next) {
  console.error(error.stack)
  response.status(500).send('Something is broken!')
})


app.get('/', cors(corsOptions),  (request, response) => {
  response.send('Hello World!') // отправка ответа
})

app.post('/profile',cors(corsOptions), function (request, response, next) {
  console.log(request.body)
  response.status(201).json(request.body)
  next(new Error('Not found'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})