const user = {
  id: 1,
  name: "John",
  age: 25,
};

function SaveToLocalStorage(obj) {
  window.localStorage.setItem('user', JSON.stringify(obj))
}
function GetFromLocalStorage(key) {
  console.log(JSON.parse(window.localStorage.getItem(key)))
}

SaveToLocalStorage(user);
GetFromLocalStorage(user);

