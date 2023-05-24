//foreach loop
const alunos = ['1', '2', '3', '4'];

function imprimir(arrayAlunos) {
  console.log(arrayAlunos);
}

alunos.forEach(imprimir);

//for in

const numbers = [45, 4, 9, 16, 25];

let txt = '';
for (let x in numbers) {
  txt += numbers[x];
}

console.log(txt);

//for of

const array = [1, 2, 3, 4, 5];

for (let num of array) {
  console.log(num);
}

//while
let total = 0;
while (total < 10) {
  console.log(total);
  total++;
}
