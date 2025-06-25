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
  


// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("Birinchi sonni kiriting:", 0);
//         this.b = +prompt("Ikkinchi sonni kiriting:", 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());
  





// // № 1 - object keylarini toping
// let obj1 = { id: 1, name: "WebBrain" };
// console.log("№1:", Object.keys(obj1).join(","));


// // № 2 - raqamga teng valuelarni topish
// let obj2 = { id: 1, name: "WebBrain" };
// for (let key in obj2) {
//     if (typeof obj2[key] === "number") {
//         console.log("№2:", key);
//     }
// }


// // № 3 - boolean qiymatlarni key bilan birga qaytarish
// let obj3 = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false,
// };
// let result3 = {};
// for (let key in obj3) {
//     if (typeof obj3[key] === "boolean") {
//         result3[key] = obj3[key];
//     }
// }
// console.log("№3:", result3);


// // № 4 - qiymat bo‘yicha objectdan topish
// let obj4 = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false,
// };
// function Search(obj, str) {
//     for (let key in obj) {
//         if (obj[key] === str) {
//             console.log("№4:", key + ":", obj[key]);
//         }
//     }
// }
// Search(obj4, "WebBrain");


// // № 5 - qiymat ichida string bor bo‘lsa chiqish
// let obj5 = {
//     id: 1,
//     name: "atirgul",
//     color: "qizil",
//     count: 10,
//     price: "10$",
// };
// function searchValue(obj, str) {
//     let result = [];
//     for (let key in obj) {
//         if (typeof obj[key] === "string" && obj[key].includes(str)) {
//             result.push(obj[key]);
//         }
//     }
//     console.log("№5:", result.join(","));
// }
// searchValue(obj5, "i");


// // № 6 - ichma-ich age larni yig‘ish
// let person = {
//     id: 1,
//     name: "Odil",
//     age: 78,
//     child: {
//         id: 1,
//         name: "Ali",
//         age: 48,
//         child: {
//             id: 1,
//             name: "Umar",
//             age: 20,
//         },
//     },
// };

// function totalAge(obj) {
//     let sum = 0;
//     function helper(o) {
//         if (o.age) sum += o.age;
//         if (o.child) helper(o.child);
//     }
//     helper(obj);
//     console.log("№6:", sum);
// }
// totalAge(person);


// // № 7 - clone qilish (deep clone)
// let obj7 = {
//     id: 1,
//     name: "Usmon",
//     job: "developer",
// };

// function deepClone(obj) {
//     if (obj === null || typeof obj !== "object") return obj;
//     let clone = Array.isArray(obj) ? [] : {};
//     for (let key in obj) {
//         clone[key] = deepClone(obj[key]);
//     }
//     return clone;
// }
// let cloneObj7 = deepClone(obj7);
// obj7.name = "Ali";
// console.log("№7:", cloneObj7.name); // Usmon


// // № 8 - age va year mos kelmasligini tekshirish
// let obj8 = {
//     id: 1,
//     name: "Usmon",
//     age: 34,
//     year: 1990,
// };

// let currentYear = new Date().getFullYear();
// if (currentYear - obj8.year !== obj8.age) {
//     console.log("№8: xato malumot kiritdingiz");
// }


// // № 9 - object ichida object borligini tekshirish
// let obj9 = {
//     id: 1,
//     title: "the best",
//     address: { street: "Farobiy", number: "34" },
// };

// let isHasObject = false;
// for (let key in obj9) {
//     if (typeof obj9[key] === "object" && obj9[key] !== null) {
//         isHasObject = true;
//     }
// }
// console.log("№9:", isHasObject);



// let user = {
//     id : 1 ,
//     firstName : "Eshmat",
//     surName : "Toshmatov",
//     age : 30,
//     getFullName : () => {
//         return `${this.firstName} ${this.surName}`;
//     },
// }
// console.log(user.getFullName());  // undefined undefined
 

// let ladder = {
//     step : 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };
// ladder.up().up().down().showStep().down().showStep();  // 1 , 0 : Har bir metod return this bo‘lgani uchun .up().up().down() kabi zanjirda ishlamoqda.





// 1. Istalgan sonni binary ko‘rinishga o‘tkazib, nechta 0 va 1 qatnashganini aniqlash
// function countBinaryDigits(num) {
//     const binary = num.toString(2);
//     const ones = binary.split('').filter(d => d === '1').length;
//     const zeros = binary.split('').filter(d => d === '0').length;
//     console.log(`Binary: ${binary}`);
//     console.log(`${ones} ta bir, ${zeros} ta nol qatnashgan.`);
// }

// countBinaryDigits(5); // ex: 5 === 101 → 2ta bir, 1ta nol

// // 2. Berilgan sonlar ichidan eng katta va eng kichik sonlar ayirmasi
// function findDifference(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const diff = max - min;
//     console.log(`Max: ${max}, Min: ${min}, Farq: ${diff}`);
// }

// findDifference([5, 9, 2, 14]); // farq: 14 - 2 = 12

// // 3. Math.trunc vs floor vs ceil vs parseInt farqlari
// console.log("trunc:", Math.trunc(4.9));   // 4
// console.log("floor:", Math.floor(4.9));   // 4
// console.log("ceil:", Math.ceil(4.1));     // 5

// console.log("trunc -4.9:", Math.trunc(-4.9)); // -4
// console.log("floor -4.9:", Math.floor(-4.9)); // -5
// console.log("ceil -4.1:", Math.ceil(-4.1));   // -4

// console.log("parseInt('4.9'):", parseInt("4.9")); // 4

// // 4. randomInteger(min, max) funksiyasi
// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Random (1–50):", randomInteger(1, 50));

// // ➕ Qo‘shimcha Math funksiyalar (2-rasmdan)

// console.log("Math.PI:", Math.PI); // 3.141592...

// console.log("Math.abs(-5):", Math.abs(-5)); // 5 — musbatga aylantiradi

// console.log("Math.round(4.5):", Math.round(4.5)); // 5 — yaxlitlash
// console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
// console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
// console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5

// console.log("Math.min(1, 7, 3):", Math.min(1, 7, 3)); // 1
// console.log("Math.max(1, 7, 3):", Math.max(1, 7, 3)); // 7

// console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 — 2^3

// // Math.sign() — sonning ishorasini bildiradi
// console.log("Math.sign(3):", Math.sign(3));   // 1
// console.log("Math.sign(-3):", Math.sign(-3)); // -1
// console.log("Math.sign(0):", Math.sign(0));   // 0

// // Ildiz olish funksiyalari
// console.log("Math.sqrt(4):", Math.sqrt(4));   // 2 — kvadrat ildizi
// console.log("Math.cbrt(8):", Math.cbrt(8));   // 2 — kub ildizi
  