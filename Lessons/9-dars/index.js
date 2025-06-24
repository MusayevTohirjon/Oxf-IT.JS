// let obj1 = {
//   name: "Ali",
// };
// let obj2 = {
//   name: "Ali",
// };
// console.log(obj1 === obj2);
// console.log(obj1 == obj2);

// let a = 10;
// let b = 10;

// console.log(a === b);
// console.log(a == b);

// let obj = {
//   name: "Ali",
// };

// let cloneObj = Object.assign({}, obj);
// let cloneObj = structuredClone(obj);

// cloneObj.name = "Eshmat";

// console.log(obj);
// console.log(cloneObj);

// let status = "age";
// let obj = {
//   name: "Ali",
//   age: 20,
//   status: "student",
//   ["age"]: "name",
//   status: status,
//   ["name"]: [status],
// };
// console.log(obj.name);
// console.log(obj[status]);
// console.log(obj["age"]);
// console.log(obj.status);

// for (let key in obj) {
//   console.log(key, " = ", obj[key]);
// }

// ==========================================
// let user = {
//   name: "Eshmat",
//   age: 30,
//   status: "Ishchi",
//   getName: function () {
//     console.log(this);
//   },
// };
// let cloneUser = user;
// user = null;
// let cloneCloneUser = cloneUser;
// cloneUser = null;

// cloneCloneUser.getName();

// function User(fName, lName, age) {
//   this.name = fName;
//   this.surname = lName;
//   this.age = age;
// }
// let obj1 = new User("Ali", "Valiyev", 20);
// let obj2 = new User("Vali", "Aliyev", 30);
// console.log(obj1);
// console.log(obj2);

// let id = Symbol();
// let id2 = Symbol();

// console.log(id == id2);
// console.log(id === id2);
// let person = {
//   id: 7,
//   fName: "Eshmat",
//   lName: "Toshmatov",
//   phone: "+998 99 123 45 67",
//   [Symbol("pasportID")]: "AB1234567",
// };

// console.log(person.pasportID);

// for (let key in person) {
//   console.log(person[key]);
// }

// let obj = {
//   name: "Ali",
//   ["name"]: "Vali",
//   7: "Eshmat",
// };

// console.log(obj[7]);

// let user = {
//   name: "Eshmat",
//   age: 60,
//   status: "Ishchi",
//   child: {
//     name: "Toshmat",
//     age: 30,
//     status: "Talaba",
//   },
// };

// let {name, age, status, child: { name: n, age: a, status: s }} = user;
// console.log(name);
// console.log(age);
// console.log(status);
// console.log("=========================");
// console.log(n);
// console.log(a);
// console.log(s);

// const obj = {
//   name: "Ali",
// };

// const newObj = obj;

// newObj = 20;

// console.log(newObj);

// let obj1 = {
//   name: "Ali",
// };

// let obj2 = {
//   age: 20,
// };

// let newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// let obj1 = {
//   name: "Ali",
//   age: 20,
// };

// obj1.name = "Vali";
// obj1.age = 30;

// let user = {
//   name: "Eshmat",
//   age: 30,
//   status: "Ishchi",
//   getName: function () {
//     console.log(this);
//   },
// };
// let cloneUser = user;
// user = null; // Garbache Collection

// cloneUser.getName();
