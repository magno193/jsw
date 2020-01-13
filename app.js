function makeGreeting(language) {

    return function (firstname, lastname) {
        
        if (language === 'pt') {
            console.log(`Olá ${firstname} ${lastname}`);            
        }

        if (language === 'en') {
            console.log(`Hello ${firstname} ${lastname}`);
        }
    }
}

var greetPortuguese = makeGreeting('pt');
var greetEnglish = makeGreeting('en');

// Aponta language para o contexto de execução anterior
greetPortuguese('Alex', 'Ferreira');
greetEnglish('John', 'Doe');