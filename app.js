// JSON - JavaScript Object Notation
// JSON é inpirado em Object Literal de javascript
// e é similar a ele, entretando os dois não são os mesmos.

var objectLiteral = {
    firstname: 'Alexandre',
    isAProgrammer: true
};
console.log(objectLiteral);

// Object para JSON
console.log(JSON.stringify(objectLiteral));

// JSON para Object
var jsonValue = JSON.parse('{ "firstname": "Alexandre", "isAProgrammer": true}');
console.log(jsonValue);