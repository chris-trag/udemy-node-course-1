var greeting = 'Hello World!!!!!!!';

function greet(){
  console.log(greeting);
}

// The Revealing Module Pattern
module.exports = {
  greet: greet
}
