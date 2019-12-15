function greet(firstname, lastname, language, ...other) {
    // Default values
    firstname = firstname || '<nome>';
    lastname = lastname || '<sobrenome>';
    language = language || '<linguagem>';

    if (arguments.length === 0) {
        console.log('Faltam parâmetros!');
        console.log('-------------------');
        return;
    }

    console.log('firstname: ' + firstname);
    console.log('lastname: ' + lastname);
    console.log('language: ' + language);
    console.log('arguments: ' + arguments);
    console.log('arguments[0]: ' + arguments[0]);
    console.log('-------------------');
    
}
// javascript executa mesmo sem passar parâmetros
greet();
greet('Alex')
greet('Alex', 'Ferreira')
greet('Alex', 'Ferreira', 'PT-BR')