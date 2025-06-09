let son = Number(prompt("Iltimos, biror son kiriting:"));
console.log(son);

if (son) {
    if (son % 2 === 0) {
        console.log("Bu son juft.");
    } else {
        console.log("Bu son toq.");
    }
}
else {
    console.log("Xatolik: noto'g'ri son kiritildi.");
}


let age = Number(prompt("Iltimos yosh kiriting"));
let year = 2025;
let yosh = year - age;


// console.log(yosh + " yoshdasiz");

if (age >=2 && age <= 6) {
    console.log("siz boqchada o'qiysiz");        
}
else if (age >= 7 && age <= 18) {
    console.log("siz maktabda o'qiysiz");
}

else if (age >= 19 && age <= 30) {
    console.log("siz universitetda o'qiysiz");
}

else if (age >= 31 && age <= 60) {
    console.log("siz Ishlaysiz");
}
else if (age >= 61) {
    console.log("siz Nafaqadasiz");
}

else {
    console.log("siz dead bolgansiz ");
// } 

let a = 9833, b = 876 , c = 39
if(a>b && a>c){
 console.log("a katta");
 max = a 
}else if(c>a && c>b){
    console.log("c ,katta");
    max = c
}

// ===============================================

if (a < b && a < c) {
    console.log("a kichik");
    min = a
} else if (c < a && c < b) {
    console.log("c ,kichik");
    min = c
   }

   console.log(max, min);

   console.log(max - min);
