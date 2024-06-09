const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache('2 minutes'));
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

// const cors = require('cors')
// const corsOptions = {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }


// app.use(express.json())
//
// app.use(function(error, request, response, next) {
//   console.error(error.stack)
//   response.status(500).send('Something is broken!')
// })
//
//
// app.get('/', cors(corsOptions),  (request, response) => {
//   response.send('Hello World!') // отправка ответа
// })
//
// app.post('/profile',cors(corsOptions), function (request, response, next) {
//   console.log(request.body)
//   response.status(201).json(request.body)
//   next(new Error('Not found'))
// })
//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// })

// const pg = require('pg')
// require('./server.js')

// const { Client } = pg
// const client = new Client({
//   host: 'localhost',
//   port: 5433,
//   database: 'exampledb',
//   user: 'postgres',
//   password: 'asd123ASD',
// })

// const getTable = () => {
//   const text = 'SELECT *  FROM  products'
//     console.log(text)
// }
// getTable()
// client.connect(async (err) => {
//   const example = await client.query(newProduct)
//   console.log(example)
//   client.end()
// })

