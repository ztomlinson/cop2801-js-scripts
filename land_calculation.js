 var feetInAcre = 43560;
// the function conducts the calculations.
function calculateAcresPerSquareFeet(totalSquareFeet) {
  var acres = totalSquareFeet / feetInAcre;
  return acres;
}
var numberOfAcres=calculateAcresPerSquareFeet(348480)
// the result is output.
console.log("There are",numberOfAcres,"acres.");
