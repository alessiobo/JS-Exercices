const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

 /* modificando l'oggetto "person2" viene modificato 
 anche l'oggetto "person1"
 perché entrambi puntano allo stesso 
 oggetto in memoria in quanto const person2 = person1 */