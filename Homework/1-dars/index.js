let Boshlanish = prompt("Boshlanish sanasini kiriting (YYYY-MM-DD):", "1500");

let Tugash = prompt("Tugash sanasini kiriting (YYYY-MM-DD):", "2025");

if (Boshlanish && Tugash) {
    let BoshlanishYili = new Date(start);
    let TugashYili = new Date(end);

    if (!isNaN(BoshlanishYili) && !isNaN(TugashYili)) {
        if (TugashYili > BoshlanishYili) {
            let diffTime = TugashYili - BoshlanishYili;
            let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            alert("Kunlar soni: " + diffDays);
        } else {
            alert("Tugash sanasi boshlanish sanasidan keyin bo'lishi kerak.");
        }
    } else {
        alert("Kiritilgan sanalar noto'g'ri formatda.");
    }
} else {
    alert("Iltimos, ikkala sanani ham kiriting.");
}