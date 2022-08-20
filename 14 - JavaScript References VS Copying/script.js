const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const array = [...players];
array[4] = 'mert';
console.log(array);


const person = {
  name: 'Mert Süha',
  age: 20
};

const arrayObj = Object.assign({}, person, { number: 99, age: 12 });
console.log(arrayObj);//changed copy
