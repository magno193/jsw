// Function statement
function greet(name) {
    console.log('Olá ' + name);
}
greet('John');

// Function expression
var greetFunc = function (name) {
    console.log('Olá ' + name);
}
greetFunc('John');

// Immediately Invoked Function Expression (IIFE)
var greeting = function (name) {
    return 'Olá ' + name;
}('John');
console.log(greeting);



var firstname = 'John';

(function(name){
    var greeting = 'Insde IIFE: Olá';
    console.log(greeting + ' ' + name)
}(firstname)); // IIFE