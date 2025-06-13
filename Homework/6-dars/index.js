// for (let i = 0; i < 5; i++) {
//     alert(i);
// }



// let i = 0;
// while (i < 5) {
//     alert(i);
//     i++;
// }



// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 5);




// let number;
// for (; ;) {
//     number = prompt("Iltimos, 100 dan katta son kiriting:");
//     if (number === null || number === "" || +number > 100) break;
// }



// let number = prompt("Iltimos, 100 dan katta son kiriting:");
// while (number !== null && number !== "" && +number <= 100) {
//     number = prompt("Iltimos, 100 dan katta son kiriting:");
// }



// let number;
// do {
//     number = prompt("Iltimos, 100 dan katta son kiriting:");
// } while (number !== null && number !== "" && +number <= 100);













// let n = +prompt("n ni kiriting:");

// for (let i = 2; i <= n; i++) {
//     let tub = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             tub = false;
//             break;
//         }
//     }

//     if (tub) {
//         alert(i);
//     }
// }





// let n = +prompt("n ni kiriting:");
// let i = 2;

// while (i <= n) {
//     let tub = true;
//     let j = 2;

//     while (j < i) {
//         if (i % j == 0) {
//             tub = false;
//             break;
//         }
//         j++;
//     }

//     if (tub) {
//         alert(i);
//     }

//     i++;
// }





// let n = +prompt("n ni kiriting:");
// let i = 2;

// do {
//     let tub = true;
//     let j = 2;

//     while (j < i) {
//         if (i % j == 0) {
//             tub = false;
//             break;
//         }
//         j++;
//     }

//     if (tub) {
//         alert(i);
//     }

//     i++;
// } while (i <= n);
