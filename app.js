// Objeto Literal
var Alexandre = {
    firsname: 'Alexandre',
    lastname: 'Ferreira',
    address: {
        street: 'General Telles, 2877',
        city: 'Botucatu',
        state: 'SP'
    }
};

function greet(person) {
    console.log('Olá ' + person.firsname);
}

greet(Alexandre);
greet({
    firsname: 'Mary',
    lastname: 'Doe'
});

Alexandre.address2 = {
    street: 'Costa Leite, 2000'
}