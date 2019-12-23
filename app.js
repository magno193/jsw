// Sobrecarga de funções
// javascript não possui sobrecarga de funções 
// porque funções são objetos
function greet(firstname, lastname, language) {

    language = language || 'pt';

    if (language == 'pt') {
        console.log('Olá ' + firstname + ' ' + lastname);
    }

    if (language == 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

}

// Simplificando funções
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en')
}

function greetPortuguese(firstname, lastname) {
    greet(firstname, lastname, 'pt')
}

greet('Alexandre', 'Ferreira');
greet('Alexandre', 'Ferreira', 'en');