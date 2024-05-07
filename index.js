const pg = require('pg')
require('./server.js')

// const { Client } = pg
// const client = new Client({
//   host: 'localhost',
//   port: 5433,
//   database: 'exampledb',
//   user: 'postgres',
//   password: 'asd123ASD',
// })
//
// const newProduct = {
//   text: 'INSERT INTO products(image, name, price) VALUES($1, $2, $3)',
//   values: ['example2', 'product2', 123],
// }
//
// client.connect(async (err) => {
//   const example = await client.query(newProduct)
//   console.log(example)
//   client.end()
// })

