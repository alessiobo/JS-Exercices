const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocal() {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

function getUserFromLocalStorage() {
  const userJSON = localStorage.getItem('user');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    console.log(user);
    return user;
  } else {
    console.log('No user data found in localStorage.');
    return null;
  }
}