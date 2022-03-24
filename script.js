// jam
const judulWib = document.querySelector('#judul-wib');
judulWib.innerHTML = "Waktu Indonesia Barat";

window.setTimeout("waktu()", 1000);

function waktu() {
    const waktu = new Date();
    setTimeout("waktu()", 1000);
    // jika mau membuat WIT silahkan tambahkan +1 setelah function getHours
    const a = document.getElementById('jam').innerHTML = waktu.getHours();
    const b = document.getElementById('menit').innerHTML = waktu.getMinutes();
    const c = document.getElementById('detik').innerHTML = waktu.getSeconds();

    // jika diatas jam 5 dan dibawah jam 18 dark-mode tidak tampil, selain itu tampil
    if ( 5 >= a <= 18 && b > 00) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
}
// end-jam


// Tanggal 
const judulTanggal = document.querySelector('#judul-tanggal');
judulTanggal.innerHTML = "Tanggal";

const calender = new Date();

const hari = calender.getDay();
const tgl = calender.getDate();
const bulan = calender.getMonth();
const tahun = calender.getFullYear();

// split(" ") = pemisah kata/string
const namaHari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu").split(" ");
const namaBulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember").split(" ");

document.getElementById('hari').innerHTML = namaHari[hari];
document.getElementById('tanggal').innerHTML = tgl;
document.getElementById('bulan').innerHTML = namaBulan[bulan];
document.getElementById('tahun').innerHTML = tahun;
// end-tanggal

