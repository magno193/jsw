// Retorna primeiro (false < 1) depois true pois false = 0
console.log(3 < 2 < 1);

//Coerção
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// Igualdade com coerção e igualdade restrita
console.log('3' == 3); // Não recomendado
console.log('3' === 3); 