// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let yigindi = 0;
// for (let value of arr) {
//  yigindi = yigindi + value;
// }
// console.log(yigindi);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let juftYigindi = 0;
// let toqYigindi = 0;

// for (let value of arr) {
//     if (value % 2 === 0) {
//         juftYigindi += value;  // juft son
//     } else {
//         toqYigindi += value;   // toq son
//     }
// }

// console.log("Juft sonlar yig'indisi:", juftYigindi);
// console.log("Toq sonlar yig'indisi:", toqYigindi);


for (let num = 2; num <= 20; num++) {
    let tub = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            tub = false;
            break;
        }
    }

    if (tub) {
        console.log(num);
    }
}
  