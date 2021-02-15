function findFactorial(num) {
    let factorial = 1;
    for(let i=1; i <=num; i++) {
    factorial = factorial * i;
    }
    return factorial;
}
const x = findFactorial(5);
console.log(x);
