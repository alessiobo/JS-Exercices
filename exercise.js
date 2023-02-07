const isLogged = true;

function login(el) {
  return new Promise((resolve, reject) => {
    if (el) {
      return resolve(Math.random());
    } else {
      return reject(new Error("Not logged in"));
    }
  });
}

function getUserEl(userel) {
  return new Promise((resolve, reject) => {
    if (userel > 0.5) {
      return resolve({ name: "John", age: 24 });
    } else {
      return reject(new Error("Your number is not greater than 0.5"));
    }
  });
}

login(isLogged)
  .then((userel) => getUserEl(userel))
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise chain completed"));
