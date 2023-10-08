//Menggunakan Kondisi if, else, nested if untuk mencari makanan dengan rasa pedas
let Makanan = "Toppoki";
let Rasa = "Pedas";

if (Makanan === "Toppoki") {
        console.log("Saya Menyukai makanan korea yang bernama Toppoki");

        if (Rasa === "Pedas") {
            console.log("Toppoki dengan rasa pedas adalah favorit saya");
        } else {
            console.log("Toppoki dengan rasa original juga enak");
        }
    } else if (Makanan === "Ramyeon") {
        console.log("Ramyeon juga enak sepertinya")
    } else {
        console.log("saya belum pernah mencoba makanan ini ");
}

//Menggunakan kondisi switch case untuk mencari harga makanan
let JenisMakanan = "Sate"; 
let Harga;

switch (JenisMakanan) { 
    
    case "Toppoki":
        Harga = 20000;
        break;
    case "Pizza":
        Harga = 130000;
        break;
    case "Ramyeon":
        Harga = 50000;
        break;
    case "Kernas":
        Harga = 15000;
        break;
    case "Sate":
        Harga = 15000;
        break;
    case "Kernas":
        Harga = 15000;
        break;
    default:
        Harga = "Makanan tidak ditemukan";
        break; 
}
console.log(`Harga ${JenisMakanan} adalah Rp ${Harga}`);


//Menggunakan Kondisi for statement untuk melihat menu makanan yang tersedia
let makanan = ["Toppoki", "Pizza", "Ramyeon", "Bakso", "Sate", "Kernas"];

console.log(" perulangan for statement");
for (let i = 0; i < makanan.length; i++) {
    console.log(`Menu Makanan ${makanan[i]}.`);
}

//Peruolangan menggunakan kodisi While
let i = 0;
while (i < makanan.length) {
    console.log(`makanan yang saya beli ${makanan[i]}.`);
    i++;
}

// Perulangan Menggunakan kondisi do while
let j = 4;
do {
    console.log(`Saya membeli makanan yang enak yaitu ${makanan[j]}.`);
    j++;
} while (j < makanan.length);

//Menggunakan kondisi function untuk menghitung total harga makanan yang dibeli

function hitungTotalHarga(makanan) {
    let totalHarga = 0;

    const daftarHarga = {
        "Toppoki": 20000,
        "Pizza": 130000,
        "Ramyeon": 50000,
        "Kernas": 15000,
        "Sate": 15000,
        "Bakso": 10000
    };

    for (let i = 0; i < makanan.length; i++) {
        const makananItem = makanan[i];
        if (daftarHarga.hasOwnProperty(makananItem)) {
            totalHarga += daftarHarga[makananItem];
        } else {
            console.log(`Harga makanan ${makananItem} tidak ditemukan.`);
        }
    }
    return totalHarga;
}
const totalHargaMakanan = hitungTotalHarga(makanan);

console.log(`Total harga makanan yang dibeli adalah Rp ${totalHargaMakanan}.`);