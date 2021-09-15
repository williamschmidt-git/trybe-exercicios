const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

const numberGenerator = () => {
    return Math.random() * 100;
}
  
console.log(Math.round(numberGenerator()));