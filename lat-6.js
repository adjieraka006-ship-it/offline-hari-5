// function declaration
function Mhs(nama, energi) {
    let mhs = {};
    mhs.nama = nama;
    mhs.energi = energi;

    mhs.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    mhs.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main`);
    }

    return mhs;
}

let aku = Mhs('Aku', 10);
let kamu = Mhs('Kamu', 10);