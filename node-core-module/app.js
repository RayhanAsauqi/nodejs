//core module

// const { error } = require("console");
const fs = require("fs");

console.log(fs);

// menuliskan string ke file secara (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous!");
// } catch (error) {
//   console.log(error);
// }

//menulisakan string ke file secara (asynchronous)
// fs.writeFile("data/test.txt", "Hello World secara Asynchronous", (error) => {
//   console.log(error);
// });

//membaca isi file secara (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data.toString())

//membaca is file secara (asynchronous)
// fs.readFile('data/test.txt','utf-8', (error, data) => {
//     if(error) throw error
//     console.log(data)
// })

//Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda :", (nama) => {
  rl.question("Masukkan No HP anda : ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data.");
    rl.close();
  });
});

