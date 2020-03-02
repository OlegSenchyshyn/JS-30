const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// clearing
console.clear(); //clears the console

// Regular
console.log('hello');

//Table
console.table(dogs);

// Interpolated
console.log('Hello I am a %s string!', '💩'); //interpolate whatever you've passed as a second thing, into the first one (in the place of '%s')

// Styled  text with %c
console.log('%c I am some big text!', 'font-size: 24px; color: red');

// warning!
console.warn('OH NOOOO');

// Error :|
console.error('Error!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing if the things are true (throwing an error in the console if it is false)
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

console.assert(1 === 2, 'You did not select the right element!');

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`); //closed
  //or console.group(`${dog.name}`) - opened
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting how many times you used specific word/number/object/etc
console.count('Dave');
console.count('Dave');
console.count('John');
console.count('John');
console.count('Dave');
console.count('John');
console.count('Dave');
console.count('John');
console.count('John');
console.count('John');
console.count('John');
console.count('John');

// timing if you want to see how long something takes
console.time('fetching data');
fetch('https://api.github.com/users/OlegSenchyshyn')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
