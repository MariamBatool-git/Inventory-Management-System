const knex = require('../db/knex.js');

const listAllProducts = async () => {
    const data = await knex.raw(`SELECT * FROM "product";`);
    return data.rows;
}

const listOneProduct = async (id) => {
    const data = await knex.raw(`SELECT * FROM "product" WHERE product_id = ${id};`);
    return data.rows;
}

const updateProduct = async (id, product_name = null, quantity = null, price = null) => {
    console.log(product_name, quantity, price);
    let query = `UPDATE product SET `;
    if (product_name !== '' && product_name !== undefined && product_name !== null){
        query += `product_name = '${product_name}',`;
    }
    if (quantity !== '' && quantity !== undefined && quantity !== null){
        query += `quantity = ${quantity},`;
    }
    if (price !== '' && price !== undefined && price !== null){
        query += `price = ${price},`;
    }
    query = query.slice(0, -1);
    query += ` WHERE product_id = ${id} RETURNING *;`;
    console.log(query);
    const data = await knex.raw(query);
    return data.rows; 
  }

module.exports = {
    listAllProducts,
    listOneProduct,
    updateProduct
}