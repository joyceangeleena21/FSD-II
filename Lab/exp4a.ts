const TAX_RATE: number = 0.08;
const DELIVERY_CHARGE: number = 50; 
interface Customer {
    name: string;
    age: number;
    foodType?: 'Veg' | 'Non-Veg' | 'Dessert';
}

class Order {
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
        console.log(`Food Type: ${this.customer.foodType}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Food Price: ₹${this.foodPrice}`);
        console.log(`Total Bill: ₹${this.calculateTotalBill()}`);
        console.log("---------------------------");
    }
}

const user: Customer = {
    name: "Rahul Sharma",
    age: 25,
    foodType: "Veg"
};

const myOrder = new Order(user, 500, 101);

myOrder.printBill();