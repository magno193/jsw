function greet(whattosay) {
    
    return function (name) {
        console.log(whattosay + ' ' + name);
    }

}

// Invocando uma função dentro de uma função
greet('Hi')('Tony');

// Armazenando a função invocada
var sayHi = greet('Hi');
// Closure - pega a variavel da função fechada anterior como escopo global
sayHi('Tony');