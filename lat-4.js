const prompt = require("prompt-sync")();

let produk = [
    {nama: "Laptop", harga: 12000000},
    {nama: "Hp", harga: 3500000},
    {nama: "Tablet", harga: 5000000},
    {nama: "Smartwatch", harga: 1500000},
];

//1. Menampilkan semua data produk
console.log("\nDaftar Harga Produk:");
// Mengganti 'mhs' menjadi 'p' agar lebih relevan
produk.forEach(p => {
    console.log(` ${p.nama} - harga: Rp${p.harga.toLocaleString('id-ID')}`);
});

//2. Membuat array baru berisi nama produk
let daftarNama = produk.map(p => p.nama);
console.log("\nDaftar Nama Produk:", daftarNama);

//3. Urutkan berdasarkan harga tertinggi
// --- PERBAIKAN #1: Menggunakan .harga bukan .nilai ---
let urutHarga = [...produk].sort((a, b) => b.harga - a.harga);
console.log("\nUrutkan Berdasarkan Harga (Tertinggi - Terendah):");
// --- PERBAIKAN #2: Menggunakan .harga bukan .produk ---
urutHarga.forEach(p => {
    console.log(`${p.nama} - Rp${p.harga.toLocaleString('id-ID')}`);
});

//4. Cari produk berdasarkan nama
do{
let cariNama = prompt("Masukan nama produk yang di cari: ");
let hasilCari = produk.find(p => p.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    // --- PERBAIKAN #3: Menggunakan .harga bukan .nilai ---
    console.log(`\nDitemukan: ${hasilCari.nama} dengan harga Rp${hasilCari.harga.toLocaleString('id-ID')}`);
} else {
    console.log("\nProduk tidak ditemukan.");
}

//tanyakan apakah ingin mencari lagi?
var ulang=prompt('ulang? (y/n)');
} while (ulang.toLowerCase() === 'y')
console.log("\n Terimakasih! Program Selesai")
