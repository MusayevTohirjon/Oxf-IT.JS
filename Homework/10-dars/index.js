// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "Talaba",
//     },
// };
// let cloneUser = structuredClone(user);

// cloneUser.child.age = 45;

// console.log(user.child.age);     
// console.log(cloneUser.child.age)



// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "Talaba",
//         func() {
//             return this.age;
//         },
//     },
// };


// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "Talaba",
//         func() {
//             return this.age;
//         },
//     },
// };

// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') return obj;
//     let clone = (Object.prototype.toString.call(obj) === '[object Array]') ? [] : {};
//     for (let key in obj) {
//         clone[key] = deepClone(obj[key]);
//     }
//     return clone;
// }

// let cloneUser = deepClone(user);
// cloneUser.child.age = 45;

// console.log(user.child.age);
// console.log(cloneUser.child.age);
// console.log(user.child.func());
// console.log(cloneUser.child.func()); 
  


