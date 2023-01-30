const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filteredPerson = {
  id: 1,
  age: 25,
};

const json = JSON.stringify(person, ['id', 'age']);

console.log(json); // Should return: { id: 1, age: 25 }

// era giusta anche questa come soluzione?
// const { id, age } = person;
// const filtered = { id, age };

// const json = JSON.stringify(filtered);

// console.log(json);
