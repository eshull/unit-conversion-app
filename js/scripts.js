isGallons = confirm("Click Okay to find Liters or Cancel to find Gallons");

var findLiters = function(gallons) {
  var calculatedLiters = gallons/0.26417;
  return calculatedLiters;
}

var findGallons = function(liters) {
var calculatedGallons = liters * 0.26417;
return calculatedGallons;
}

var quantity = parseFloat(prompt("Enter the number of gallons or liters: "));

// var output = function() {
  if (isGallons) {
    console.log(findLiters(quantity));
  } else {
    console.log(findGallons(quantity));
  }


// alert(output())
