// Variable Annotations
let myName:string="Joyce Angeleena";
let rollNo:number=118;
let isStudent:boolean=true;
console.log(myName);
console.log(rollNo);
console.log(isStudent);

//Function Parameter and Return Type Annotations
function add(x:number, y:number):number{
    return x+y;
}
console.log(add(12,23));

//Array Annotations
let friends: string[]=["Pallavi","Fazrin","Neha","Lahari","Ganiki"];
console.log(`Friends:${friends.join(",")}`);
