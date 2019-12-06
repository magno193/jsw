// Default value legacy
function greet(name) {
    name = name || '<Seu nome>'
    console.log('Olá ' + name);
}

greet('Alex');
greet();