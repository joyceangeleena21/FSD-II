import { Order } from "./orderLogic.js";
// Create customer object
const user = {
    name: "Rahul Sharma",
    age: 25,
    foodType: "Veg"
};
// Create Order object
const myOrder = new Order(user, 500, 101);
// Execute
myOrder.printBill();
