// let obj = {
//     name: "Ali",
//     surName: "Valiev",
//     age: 40,
//     child: {
//         name: "Salim",
//         surName: "Alimov",
//         age: 20,
//         getFullName() {
//             console.log(
//                 `Bu o'quvchining ismi: ${this.name}, familyasi: ${this.surName}`
//             );
//         }
//     }
// };

// let newObj = {
//     ...obj,
//     child: {
//         ...obj.child,
//     }
// };

// newObj.child.name = "Eshmat"
// newObj.child.surName = "Toshmatov"

// obj.child.getFullName();
// newObj.child.getFullName();


let str = "Algoritm_6 and Oxford_2.!";
let newStr = str.toLowerCase();
let result = "";
for (let value of newStr){
    if(value.toUpperCase() !== value || value === " "){
        result += value;
    }
}
result = result.replace("a" , "A")

console.log(result);