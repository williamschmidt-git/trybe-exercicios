// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.losango(75, 25)}cm²`);

console.log(`Trapézio de base maior 100cm, base menor 70cm e altura 50cm: ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Trapézio de base maior 75cm, base menor 50cm e altura 35cm: ${Exercise.trapezio(75, 50, 35)}cm²`);
console.log(`Trapézio de base maior 150cm, base menor 120cm e altura 80cm: ${Exercise.trapezio(180, 120, 50)}cm²`);

console.log(`Círculo com raio de 25cm ${Exercise.circulo(25)}cm²`);
console.log(`Círculo com raio de 100cm ${Exercise.circulo(100)}cm²`);
console.log(`Círculo com raio de 12,5cm ${Exercise.circulo(12.5)}cm²`);
