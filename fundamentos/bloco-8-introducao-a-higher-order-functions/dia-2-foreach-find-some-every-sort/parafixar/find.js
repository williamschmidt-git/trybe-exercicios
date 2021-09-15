const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const find3and5 = numbers.find(findDivisibleBy3And5);

console.log(find3and5);

//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria', 'williamschmidt'];

const findNameWithFiveLetters = (names) => {
  // Adicione seu código aqui:
  return names.length === 5;
}

const checkLengthLetters = () => names.find(findNameWithFiveLetters)
console.log(checkLengthLetters());

//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (elemento)  => {
  return elemento.id === '31031685';
}

const findIdMusic = () => musicas.find(findMusic);
console.log(findIdMusic());
