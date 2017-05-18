// the cost of the items are grouped into an array.
items = [9.99,5.99,.99,59.50,.25]
// the subtotal is found through the following function:
var subTotal = 0
items.forEach(function(item) {
  subTotal = item + subTotal;
});
// the subtotal is printed.
console.log('Subtotal is $'+subTotal);
// the variable for calculating sales tax is created.
var salesTax = subTotal * .07;
// sales tax is displayed to two decimal places.
console.log('Sales tax is $'+salesTax.toFixed(2));
// variable for total amount is created.
var totalAmount = subTotal + salesTax;
// the total cost is output to two decimal places.
console.log('The total cost is $'+totalAmount.toFixed(2));
