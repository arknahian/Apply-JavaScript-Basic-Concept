function factorial(num) {
    let factorial = 1;
    for(let i = 1; i <= num; i++){
    factorial = factorial * i;
    }
    return factorial;
}
const fact = factorial(5);
console.log(fact);
