// Por valor (primitivos)
var a = 3;
var b;

// Cria novo local na memória para b, sendo uma cópia de a
b = a;
a = 2
console.log(a, b);


// Por referência (todos os objetos (inclusive funções))
var c = { greeting: 'hi' };
var d;

// Aponta para mesma referência
d = c;
c.greeting = 'hello';
console.log(c, d);

function changeGreeting(obj) {
    obj.greeting = 'Olá'
}

changeGreeting(d);
console.log(c, d);

// O operador = cria novo endereço em memória
c = { greeting: 'howdy' }
console.log(c, d)