// IIFE (Immediately Invoked Function Expressions)

var firstname = 'Jane';

(function(lastname){
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe')); // Function expression


console.log(firstname);
