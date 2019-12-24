// Ponto e vírgulas são opcionais em javascript
// o motor javascript coloca pontos virgulas automaticamente quando
// acha que deve ser colocado.

// Entretando não é recomendável deixar ser feito automaticamente.

function getPerson() {
    // O resultado irá ser undefined pois o javascript coloca ';' apos o return
    return
    {
        firstname: 'Alex'
    }
}

// Versão corrigida da função
function getPerson2() {
    return{
        firstname: 'Alex'
    }
}

console.log(getPerson());
console.log(getPerson2());