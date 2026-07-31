let anyValue: any=21;
anyValue="I am Joyce Angeleena";
console.log(anyValue);
anyValue=false;
console.log(anyValue);

let unknownValue:unknown="Full Stack Development";
if(typeof unknownValue==="string"){
    console.log(unknownValue);
    console.log("Length of unknown string:"+unknownValue.length);
}
unknownValue=50;
if (typeof unknownValue === "number") {
    console.log(unknownValue + 50);
}

function greeting(name:string): void{
    console.log("HELLO "+name);
}
greeting("Angeleena");