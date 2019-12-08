// Funções como Objetos - em javascript funções são objetos.
// First class functions - tudo que se pode fazer com outros types
// você pdoe fazer com funções.

// Function é um object especial, que se pode passar vários tipos de dados
// como primitivos, objetos, funções.

function greet() {
    console.log('Oi');
}

// Como function é um object, pode-se passar propriedades
greet.language = 'portuguese';
console.log(greet);
console.log(greet.language);
console.log(greet());