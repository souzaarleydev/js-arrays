const notas = [10, 6.5, 8, 7.5, 6];

// const notasAtualizadas = notas.map((nota) => nota == 10 ? nota : ++nota);
// console.log(notasAtualizadas)

const atualizadas = notas.map((nota) => nota +1 >= 10? 10 : nota +1);

console.log(atualizadas)