import { Order } from "./orderLogic.js";
import { Customer } from "./customer.js";

const user: Customer = {
    name: "Rahul Sharma",
    age: 25,
    foodType: "Veg"
};

const myOrder = new Order(user, 500, 101);

myOrder.printBill();