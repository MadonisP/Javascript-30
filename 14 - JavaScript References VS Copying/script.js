const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const array = [...players];
array[4] = 'mert';
console.log(array);


const person = {
  name: 'Mert Süha',
  age: 20
};

const arrayObj = Object.assign(person, { number: 99, age: 32 });//syntax //const returnedTarget = Object.assign(target, source);
console.log(arrayObj);//changed copy
