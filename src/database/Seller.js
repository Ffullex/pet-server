const DB = require('pg')
const { Client } = DB

const CLIENT = new Client({
  host: 'localhost',
  port: 5433,
  database: 'exampledb',
  user: 'postgres',
  password: 'asd123ASD',
})

const getAllSellers = async () => {
  try {
    await CLIENT.connect()
    console.log(await CLIENT.query({ text: 'SELECT *  FROM  sellers' }))
    const result = await CLIENT.query({ text: 'SELECT *  FROM  sellers' })
    await CLIENT.end()
    return result.rows
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllSellers,
}