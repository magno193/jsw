// Array é uma coleção
// Em javascript o array pode ser de vários tipos diferentes
var arr = [
    1,
    false,
    {name: 'Alexandre', address: 'General Telles'},
    function (name) {
        var greeting = 'Olá ';
        console.log(greeting + name);
    },
    "Olá"
];

console.log(arr);
// Invocando função dentro do array
arr[3](arr[2].name)