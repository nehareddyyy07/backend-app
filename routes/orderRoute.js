import placeOrder from "../controllers/orderController.js";
import express from "express";
const orderRouter = express.Router();
orderRouter.get("/orders", placeOrder);
export default orderRouter;
