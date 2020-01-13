// Exemplo de closure
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            // Não executado mas sim armazenado
            function () {
                console.log(i)
            }
        )
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// Todas retornam 3 porque o ultimo valor de i é 3
// e i é o que está em memória no momento que as funções
// fs[]() são executadas


// Forma de corrigir o problema
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            // Executando a função passando i
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}


var fs2 = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();