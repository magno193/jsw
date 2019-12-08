// Namespace - um container para variaveis e funções
// javascript básico não possui namespace, entretando
// é criado um namespace 'fake'
var greet = 'Olá!'
var greet = 'Hello!'

console.log(greet);

// É criado um objeto para se comportar como um container
// para as variaveis e funções que serão utilizadas
var portuguese = { 
    greet: {
        basic: 'Hello!'
    }
};
var english = {};

portuguese.greet = 'Olá!'

console.log(portuguese.greet.basic);