// =====================================================================================================
// // OBJECT
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   ips: [3.0, 3.08, 3.07],
//   sapa: function (nama) {
//     console.log(`halo ${nama}`);
//   },
//   alamat: {
//     jalan: "jln.rancapetir",
//     kota: "ciamis",
//     kabupate: "jawabarat",
//   },
// };
// =====================================================================================================

// =====================================================================================================
// // OBJECT LITERAL
// const mhs = {
//   nama: "dhea",
//   npm: "432090",
//   email: "dhea@gmail.com",
//   jurusan: "teknik informatika",
// };

// // OBJECT FUNCTION DECLARATION
// function buatObjectMahasiswa(nama, npm, email, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.npm = npm;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// let mahasiswa = buatObjectMahasiswa(
//   "dhea",
//   "43209",
//   "dhea@gmail.com",
//   "teknik informatika"
// );

// // OBJECT CONSTRUCTOR
// function Mahasiswa(nama, npm, email, jurusan) {
//   this.nama = nama;
//   this.npm = npm;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// let mhs = new Mahasiswa(
//   "dhea",
//   "43209",
//   "dhea@gmail.com",
//   "teknik informatika"
// );

// // THIS OBJECT LITERAL
// // Mengembalikan Object Yang Bersangkuttan
// const obj = { a: 10, nama: "dhea" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();

// // THIS  OBJECT FUNCTION DECLARATION
// // Mengembalikan Object Global
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();

// // THIS  OBJECT CONSTRUCTOR
// // Mengembalikan Object Yang Baru Dibuat
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// =====================================================================================================

// =====================================================================================================
// // LATIHAN
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang, penumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (this.penumpang == namaPenumpang) {
          console.log(`Sudah ada penumpang dengan nama ${namaPenumpang}`);
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          console.log("naik di akhir");
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong!");
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}

let angkot1 = new Angkot("Dhea", ["Ciamis", "Banjar"], [], 0);
let angkot2 = new Angkot("Ramdani", ["Ciamis", "Tasik"], [], 0);

// =====================================================================================================
