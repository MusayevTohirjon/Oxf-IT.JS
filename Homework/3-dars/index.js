// // Bu yoki operatori
// console.log(true || false);          // true
// console.log(false || true);          // true
// console.log(false || 0 || "salom");  // "salom"
// console.log("" || "fallback");       // "fallback"
// console.log(null || undefined || 5); // 5

// // =========================================

// // Bu va operatori
// console.log(true && true);           // true
// console.log(true && false);          // false
// console.log(1 && "salom");           // "salom"
// console.log(null && "narsa");        // null
// console.log("hello" && 0 && true);   // 0

// // =========================================

// // Bu inkor operatori
// console.log(!true);         // false
// console.log(!false);        // true
// console.log(!0);            // true
// console.log(!"salom");      // false
// console.log(!undefined);    // true

// // =========================================

// // Bu nullish operatori
// console.log(null ?? "zaxira");          // "zaxira"
// console.log(undefined ?? "default");    // "default"
// console.log(0 ?? 100);                  // 0 (0 bu false, lekin null emas)
// console.log("" ?? "matn");              // "" (bo‘sh string, lekin null emas)
// console.log(false ?? true);             // false

// // =========================================

// Bu 3-dars homeworki

// 1.
// let a = 1, b = 1;

// let c = ++a; //   2
// let d = b++; //   1

// =============================================

// 2.
// let a = 2;

// let x = 1 + (a *= 2);  // 5

// =============================================

// 3.
// 1. "" + 1 + 0      // "10"

// 2. "" - 1 + 0      // -1

// 3. true + false    // 1

// 4. 6 / "3"         // 2

// 5. "2" * "3"       // 6

// 6. 4 + 5 + "px"    // "9px"

// 7. "$" + 4 + 5     //  "$45"

// 8. "4" - 2         //  2

// 9. "4px" - 2      // NaN

// 10. "-9 " + 5     //  "-9 5"

// 11. "-9 " - 5     //  -14

// 12. null + 1      //  1

// 13. undefined + 1 //  NaN

// 14. " \t \n" - 2  //  -2

// ==============================================

// 4.
// 5 > 4   , true
// "apple" > "pineapple" , true
// "2" > "12"  ,  false
// undefined == null  , false
// undefined === null , false
// null == "\n0\n"    , true
// null === +"\n0\n"  , false

// ===============================================

// 5.
// alert(null || 2 || undefined); ,  2

// ===============================================

// 6.
// alert(alert(1) || 2 || alert(3));  , 2

// ================================================

// 7.
// alert(1 && null && 2);  , 2

// ================================================

// 8.
// alert(alert(1) && alert(3));  , 1 , undefined

// ===============================================

// 9.
// alert(null || 2 && 3 || 4);   ,  3


