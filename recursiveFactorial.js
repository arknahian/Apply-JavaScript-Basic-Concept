function factorial(n) {

    if (n === 0) {
        return 1;
    }
    else {
        return factorial(n-1) * n;
    }
}
const x = factorial(5);
console.log(x);