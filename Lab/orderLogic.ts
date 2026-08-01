import { TAX_RATE, DELIVERY_CHARGE } from './constants.js';
import { Customer } from './customer.js';

export class Order {
    constructor(
        public customer: Customer,
        private foodPrice: number,
        public orderId: number
    ) {}

    public calculateTotalBill(): number {
        const tax = this.foodPrice * TAX_RATE;
        return this.foodPrice + tax + DELIVERY_CHARGE;
    }

    public printBill(): void {
        console.log("----- Food Order Bill -----");
        console.log(`Customer: ${this.customer.name} (${this.customer.age})`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Bill: ₹${this.calculateTotalBill()}`);
        console.log("---------------------------");
    }
}