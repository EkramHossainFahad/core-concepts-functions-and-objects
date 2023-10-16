// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     console.log(sum);
// }
// add(10, 20);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money/singaraPrice;
    return quantity;
}
var singaras = bringSingara(200);
console.log(singaras);