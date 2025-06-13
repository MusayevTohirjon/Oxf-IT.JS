// // Postfix form (i++):
// for (let i = 0; i < 5; i++) {
//     alert(i);
// }

// // Prefix form (++i):
// for (let i = 0; i < 5; ++i) {
//     alert(i);
// }



// let number;

// do {
//     number = prompt("Iltimos, 100 dan katta son kiriting:", "");
// } while (number !== null && number !== "" && +number <= 100);

// alert("Rahmat!");



let n = +prompt("n ni kiriting:", );


for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue ; // tub emas
    }

    alert(i); // tub son
}
