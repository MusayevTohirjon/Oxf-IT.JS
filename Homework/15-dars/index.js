// const users = [
//   { id: 3, name: "Ali", age: 25 },
//   { id: 1, name: "Sardor", age: 27 },
//   { id: 2, name: "Bek", age: 22 },
// ];

// const sortByAge = [...users].sort((a, b) => a.age - b.age);
// console.log(sortByAge);

// const sortByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName);

// const sortById = [...users].sort((a, b) => a.id - b.id);
// console.log(sortById);

// const findSardor = users.find(user => user.name === "Sardor");
// console.log(findSardor);




const data = [
  { id: 1, status: 0 },
  { id: 2, status: 1 },
  { id: 3, status: 0 },
];

data.forEach(obj => {
  if (obj.status === 0) {
    console.log(`ID ${obj.id} -> status 0`);
  } else {
    console.log(`ID ${obj.id} -> status 1 yoki boshqa`);
  }
});
