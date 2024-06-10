const DB = require('pg')
const { Client } = DB

const CLIENT = new Client({
  host: 'localhost',
  port: 5433,
  database: 'exampledb',
  user: 'postgres',
  password: 'asd123ASD',
})

const getAllPvzEmployees = async () => {
  try {
    await CLIENT.connect()
    const result = await CLIENT.query({ text: 'SELECT *  FROM  pvzemployees' })
    await CLIENT.end()
    return result.rows
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllPvzEmployees,
}