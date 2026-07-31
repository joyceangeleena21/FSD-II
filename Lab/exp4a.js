"use strict";
const TAX_RATE = 0.08;
const DELIVERY_CHARGE = 50;
class Order {
    customer;
    foodPrice;
    orderId;
    constructor(customer, foodPrice, orderId) {
        this.customer = customer;
        this.foodPrice = foodPrice;
        this.orderId = orderId;
    }
    calculateTotalBill() {
        const tax = this.foodPrice * TAX_RATE;
        return this.foodPrice + tax + DELIVERY_CHARGE;
    }
    printBill() {
        console.log("----- Food Order Bill -----");
        console.log(`Customer: ${this.customer.name} (${this.customer.age})`);
        console.log(`Food Type: ${this.customer.foodType}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Food Price: ₹${this.foodPrice}`);
        console.log(`Total Bill: ₹${this.calculateTotalBill()}`);
        console.log("---------------------------");
    }
}
const user = {
    name: "Rahul Sharma",
    age: 25,
    foodType: "Veg"
};
const myOrder = new Order(user, 500, 101);
myOrder.printBill();
