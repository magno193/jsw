// Function expression - uma unidade de código que retorna um resultado.

// Function statement - uma unidade de código que não retorna um resultado.

// Statement - não retorna um objeto, alocado em memória antes do contexto
// de execução.
function greet() {
    console.log('oi');
}

// Expression - retorna o objeto anonymousGreet no contexto de execução.
var anonymousGreet = () => {
    console.log('oi');
}

greet();
anonymousGreet();

// Programação funcional - passando função dentro de função
function log(a) {
    console.log(a)
    a();
}

log(() => {
    console.log('hi');
});