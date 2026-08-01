// Importing specific members
import { TAX_RATE, DELIVERY_CHARGE } from './constants.js';
export class Order {
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
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Bill: ₹${this.calculateTotalBill()}`);
        console.log("---------------------------");
    }
}
