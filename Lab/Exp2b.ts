//Traditional Function
function total(price : number,tax : number): number{
    return price+(price*tax);
}
const price : number = 123;
const tax = 0.15;
const t1 = total(price,tax);
console.log(`Total(Traditional) : ${t1}`);

//Arrow Functions
const arrowTotal = (price : number, tax : number): number=>{
    return price+(price*tax);
}
const t2 = arrowTotal(price,tax);
console.log(`Total(Arrow) : ${t2}`)

//Shorthand Arrow Functions
const message = (Place :  string) : string=> `Welcome to ${Place}`;
console.log(message("Hyderabad"));
