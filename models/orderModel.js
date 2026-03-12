import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  orderValue: { type: Number, required: true },
  items: { type: Array },
  status:{type:String,default:"pending"},
  
});
const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;