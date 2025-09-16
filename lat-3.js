const prompt = require("prompt-sync")();

let mahasiswa = [
    {nama: "Budi", nilai: 85},
    {nama: "Siti", nilai: 92},
    {nama: "Andi", nilai: 58},
    {nama: "Dewi", nilai: 60},
];

//1. Data Mahasiswa dengan status Lulus/Tidak Lulus
console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    // Menambahkan status Lulus (>= 60) atau Tidak Lulus (< 60)
    let Kelulusan = mhs.nilai >= 60 ? "Lulus" : "Tidak Lulus";
    console.log(`Nama ${mhs.nama} - Nilai: ${mhs.nilai} (Status: ${Kelulusan})`);
});

//2. Array baru mahasiswa
let daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("\nDaftar Nama Mahasiswa:", daftarNama);

//3. Urutkan berdasarkan nilai tertinggi
let urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("\nUrutkan Berdasarkan Nilai (Tertinggi - Terendah):");
urutNilai.forEach(mhs => console.log(`${mhs.nama} - ${mhs.nilai}`));

//4. Cari Mahasiswa berdasarkan nama
let cariNama = prompt("Masukan nama mahasiswa yang dicari: ");
let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    console.log(`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai}`);
} else {
    console.log("\nMahasiswa tidak ditemukan.");
}

//5. Fitur Baru: Filter mahasiswa yang Lulus dan Tidak Lulus
console.log("\n--- Keterangan Kelulusan ---");

// Menggunakan filter untuk memisahkan mahasiswa yang lulus
let mahasiswaLulus = mahasiswa.filter(mhs => mhs.nilai >= 60);
console.log("\nMahasiswa Lulus:");
mahasiswaLulus.forEach(mhs => console.log(`- ${mhs.nama} (Nilai: ${mhs.nilai})`));

// Menggunakan filter untuk memisahkan mahasiswa yang tidak lulus
let mahasiswaTidakLulus = mahasiswa.filter(mhs => mhs.nilai < 60);
console.log("\nMahasiswa Tidak Lulus:");
mahasiswaTidakLulus.forEach(mhs => console.log(`- ${mhs.nama} (Nilai: ${mhs.nilai})`));

