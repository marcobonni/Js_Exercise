const user = {
  id: 1,
  name: "John",
  age: 25,
};



function SaveToLocalStorage(obj) {
  if (typeof window !== 'undefined') {
  localStorage.setItem('user', JSON.stringify(obj))
  }
}

SaveToLocalStorage(user);

