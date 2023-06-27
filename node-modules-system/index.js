// // console.log('halo dunia')
// const nama = 'rayhan alsauqi'
// // console.log(nama)

// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama))
// const fs = require('fs');// core module
// const moment = require('moment') //third party module/npm module/node_modules
// console.log('hallo dunia')

// const cetakNama = require('./coba') //local module
const coba = require("./coba");
console.log(
  coba.mahasiswa.cetakMhs(),
  new coba.Orang
);
