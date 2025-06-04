// Bu yoki operatori
console.log(true || false);          // true
console.log(false || true);          // true
console.log(false || 0 || "salom");  // "salom"
console.log("" || "fallback");       // "fallback"
console.log(null || undefined || 5); // 5

// =========================================

// Bu va operatori
console.log(true && true);           // true
console.log(true && false);          // false
console.log(1 && "salom");           // "salom"
console.log(null && "narsa");        // null
console.log("hello" && 0 && true);   // 0

// =========================================

// Bu inkor operatori
console.log(!true);         // false
console.log(!false);        // true
console.log(!0);            // true
console.log(!"salom");      // false
console.log(!undefined);    // true

// =========================================

// Bu nullish operatori
console.log(null ?? "zaxira");          // "zaxira"
console.log(undefined ?? "default");    // "default"
console.log(0 ?? 100);                  // 0 (0 bu false, lekin null emas)
console.log("" ?? "matn");              // "" (bo‘sh string, lekin null emas)
console.log(false ?? true);             // false

// =========================================