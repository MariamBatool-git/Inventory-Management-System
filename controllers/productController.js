const productModel = require('../models/productModel.js');

const getProducts = async (req, res) => {
    const products = await productModel.listAllProducts();
    res.status(200).send(products);
}

const getProduct = async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await productModel.listOneProduct(id);
    res.status(200).send(product);
}

const updateProduct = async(req, res) => {
    const id = parseInt(req.params.id);
    const {product_name, quantity, price} = req.body;
    const product = await productModel.updateProduct(id, product_name, quantity, price);
    res.status(200).send(product);
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct
}