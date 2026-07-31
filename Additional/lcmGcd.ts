function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let a = 12;
let b = 18;
let g = gcd(a, b);
let lcm = (a * b) / g;
console.log("GCD =", g);
console.log("LCM =", lcm);