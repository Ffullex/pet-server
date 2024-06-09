const DB = require('pg')
const { Client } = DB

const CLIENT = new Client({
  host: 'localhost',
  port: 5433,
  database: 'exampledb',
  user: 'postgres',
  password: 'asd123ASD',
})


async function getAllProducts(){
  try {
    await CLIENT.connect()
    const result = await CLIENT.query({ text: 'SELECT *  FROM  products' })
    await CLIENT.end()
    return result.rows
  } catch (error) {
    return error
  }
}

const createNewProduct = async(ProductToInsert) => {
  try {
    const products = await CLIENT.connect(async () => {
      const products =  await CLIENT.query({
        text: `INSERT INTO products ${ProductToInsert}`,
      })
      return products.end
    })

    return products ? products.rows : new Error('БД недоступна')
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
}