class InvestmentPlan {

    public investorName: string;
    public depositAmount: number;
    public annualRate: number;
    public duration: number;

    constructor(investorName: string, depositAmount: number);
    constructor(investorName: string, depositAmount: number, annualRate: number, duration: number);

    constructor(investorName: string, depositAmount: number, annualRate?: number, duration?: number) {

        this.investorName = investorName;
        this.depositAmount = depositAmount;

        this.annualRate = annualRate ?? 6.5;
        this.duration = duration ?? 1;
    }

    public getFinalAmount(): number {
        const interest =
            (this.depositAmount * this.annualRate * this.duration) / 100;
        return this.depositAmount + interest;
    }

    public showSummary(): void {
        console.log("------ Investment Summary ------");
        console.log(`Investor : ${this.investorName}`);
        console.log(`Deposit  : ₹${this.depositAmount}`);
        console.log(`Rate     : ${this.annualRate}%`);
        console.log(`Duration : ${this.duration} year(s)`);
        console.log(`Final Amount : ₹${this.getFinalAmount()}`);
        console.log("--------------------------------");
    }
}

const plan1 = new InvestmentPlan("Ramesh Kumar", 50000);
plan1.showSummary();

const plan2 = new InvestmentPlan("Priya Reddy", 100000, 7.2, 4);
plan2.showSummary();

plan2.depositAmount = 120000;
console.log(`Updated Final Amount for Priya: ₹${plan2.getFinalAmount()}`);