function findPrimeNum(n) {
   for(var i = 2; i < n; i++){
    if (n % i == 0) {
    return "This is not a prime number";
    }
    else{
    return "This is a prime number";
    }
  }
}
var result = findPrimeNum(83);
console.log(result);