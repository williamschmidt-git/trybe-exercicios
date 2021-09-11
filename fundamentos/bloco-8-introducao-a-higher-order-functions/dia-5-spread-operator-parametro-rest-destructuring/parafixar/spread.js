// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Canela', 'Açucar', 'Creme de Leite'];

const fruitSalad = (fruit, additional) => {
  let newList = [... fruit, ... additional]
  return newList;
};

console.log(fruitSalad(specialFruit, additionalItens));