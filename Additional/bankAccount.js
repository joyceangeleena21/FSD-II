"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(5000);
account.deposit(1000);
account.withdraw(500);
account.displayBalance();
