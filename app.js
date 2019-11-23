// Objeto
// Objeto é uma coleção de valores 
// que podem ter outras coleções de valores
var person = new Object();

// Propriedades
person['firstname'] = 'Alexandre';
person['lastname'] = 'Ferreira';

var firstNameProperty = 'firstname'

console.log(person); // Objeto
console.log(person[firstNameProperty]); // Acesso computado de propriedade

console.log(person.firstname); // Acesso de propriedade
console.log(person.lastname); // Acesso de propriedade

person.address = new Object(); // Objeto dentro de objeto
person.address.street = 'General Telles, 2877';
person.address.city = 'Botucatu';
person.address.state = 'SP';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
