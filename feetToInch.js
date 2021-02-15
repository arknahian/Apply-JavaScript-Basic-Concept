function InchToFeet(num) {
    if (num % 12 == 0) {
        var result = num / 12;
        return result;
    }
    else{
        var total = num / 12;
        var anual = total.toFixed(3);
        return anual;
    }
}
var senior = [12, 23, 43];
var nanaFeet = senior[0];
var nanaFeetResult = InchToFeet(nanaFeet);
console.log(nanaFeetResult);

var naniFeet = senior[1];
var naniFeetResult = InchToFeet(naniFeet);
console.log(naniFeetResult);

var dadaFeet = senior[2];
var dadafeetResult = InchToFeet(dadaFeet);
console.log(dadafeetResult);
