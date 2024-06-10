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
    await CLIENT.connect()
    await CLIENT.query({
      text: `INSERT INTO products [productid,productname, price, rating, sellerid ] values [
            ${ProductToInsert.productid},
            ${ProductToInsert.productname},
            ${ProductToInsert.price},
            ${ProductToInsert.rating},
            ${ProductToInsert.sellerid}
          ]`,
    })
    await CLIENT.end()

    return 'Ok'
  } catch (error) {
    return error
  }
}

const deleteProduct = async(id) => {
  try {
    console.log(1111, id)
    await CLIENT.connect()
    await CLIENT.query({ text: `DELETE FROM products WHERE id=${id} LIMIT 1`})
    await CLIENT.end()

    return 'Ok'
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProduct,
}
