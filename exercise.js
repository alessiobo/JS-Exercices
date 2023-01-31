function printAsyncName(callback, name) {
  setTimeout(() => {
    callback();
  }, 1000);
  setTimeout(() => {
    console.log(name);
  }, 2000);
}

const printHello = () => console.log("Hello");

printAsyncName(printHello, "Giovanni")



// La callback è una arrow function perché la sintassi è più facilmente leggibile
// rendendo il codice più semplice