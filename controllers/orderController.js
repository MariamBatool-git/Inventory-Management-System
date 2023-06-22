const orderModel = require('../models/orderModel.js');
const getOrders = async (req, res) => {
    const orders = await orderModel.listAllOrders();
    res.status(200).send(orders);
}

const getOrder = async (req, res) => {
    const id = parseInt(req.params.id);
    const order = await orderModel.listOneOrder(id);
    res.status(200).send(order);
}

const createOrder = async(req, res) => {
    const { order_id,customer_id, grand_total } = req.body
    const data = await orderModel.newOrder(order_id,customer_id, grand_total);
    res.status(200).send(data);
}




module.exports = {
    getOrders,
    getOrder,
    createOrder
}