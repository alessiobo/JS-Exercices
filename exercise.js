let myPromise = new Promise((resolve, reject) => {
  const number = 10;
  if (number > 10) {
    return resolve("number is greater than 10");
  } else {
    return reject("number is less than or equal to 10");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
