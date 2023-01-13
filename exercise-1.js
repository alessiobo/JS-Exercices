const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const keys = Object.keys(person);
for (let key of keys) {
  console.log(key + ": " + person[key]);
}


// Print values of person using Object.keys