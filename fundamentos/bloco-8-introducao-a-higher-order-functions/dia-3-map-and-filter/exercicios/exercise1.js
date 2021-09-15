const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = books.map((book) => {
  return `${book.name} - ${book.genre} - ${book.author.name}`
})
// console.log(formatedBookNames);

assert.deepStrictEqual(formatedBookNames, expectedResult);

// const nomesLivros = books.map((book) => {
//   return `${book.name} - ${book.genre} - ${book.author.name}`
// })

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const expectedResult2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];


constAge = books.map((book) => {
  return (book.releaseYear - book.author.birthYear)
})

nameAndAge = books.map((book, index) => {
  return {
    age: constAge[index],
    author: book.author.name,
  }
})

nameAndAge.sort(function (a,b) { //https://www.w3schools.com/jsref/jsref_sort.asp
  return a.age - b.age
});

//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a-b});

// console.log(nameAndAge);

assert.deepStrictEqual(nameAndAge, expectedResult2);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use as função filter ;

const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

const fantasyOrScienceFiction = books.filter((book) => {
  return book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
})

// console.log(fantasyOrScienceFiction);
assert.deepStrictEqual(fantasyOrScienceFiction, expectedResult3);

const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

const oldBooksOrdered = books.filter((book) => {
  let bookAge = 2021 - book.releaseYear;
  if (bookAge >= 60){
    return bookAge;
  }
})

oldBooksOrdered.sort(function(a,b){
  return a.releaseYear - b.releaseYear;
})

// console.log(oldBooksOrdered);

assert.deepStrictEqual(oldBooksOrdered, expectedResult4);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = fantasyOrScienceFiction.map((autor) => {
  return autor.author.name;
});
fantasyOrScienceFictionAuthors.sort();
// console.log(fantasyOrScienceFictionAuthors);

assert.deepStrictEqual(fantasyOrScienceFictionAuthors, expectedResult5);

//6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

oldBooksOrdered.sort(function(a,b){
  return b.releaseYear - a.releaseYear;
})

const oldBooks = oldBooksOrdered.map((book) => {
  return book.name;
})

assert.deepStrictEqual(oldBooks, expectedResult6);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult7 = 'O Senhor dos Anéis';

const authorWith3DotsOnName = books.filter((book, index) => {
  // console.log(book.author.name.split(' ')[0][1])
  if (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.') {
    return book.name;
  }
})

console.log(authorWith3DotsOnName);

// assert.deepStrictEqual(authorWith3DotsOnName, expectedResult7);