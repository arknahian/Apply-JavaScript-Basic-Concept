let factorial = 1;
let i = 1;
while (i <= 5) {
    factorial = factorial * i;
    console.log(factorial);
    i++; 
}

function factorialMaker(num) {
    let factorial = 1;
    let i = 1;
    while(i <= num){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const x = factorialMaker(5);
console.log(x);