const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocal() {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

saveUserToLocal();