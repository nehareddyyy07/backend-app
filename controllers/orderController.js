import orderModel from "../models/orderModel.js";

const placeOrder= async (req, res) => {
  const orders = await orderModel.find();
  res.render("/", { orders});
};

export default placeOrder;