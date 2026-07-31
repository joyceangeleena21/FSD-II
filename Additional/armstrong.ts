let num = 153;
let k=num;
let original = num;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
}

if (sum === original)
    console.log(k+" is Armstrong Number");
else
    console.log(k+" is Not Armstrong");