const yargs = require("yargs");
const contact = require("./contact");

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    email : {
        describe : 'Email',
        demandOption : false,
        type : 'string',
    },
    noHp : {
        describe : 'No Hp',
        demandOption : true,
        type : 'string'
    }
  },
  handler (argv) {
    contact.simpanContact(argv.nama, argv.email, argv.noHp)
  }
});

yargs.parse();

// const main = async () => {
//   const nama = await contact.tulisPertanyaan("Masukkan nama anda : ");
//   const email = await contact.tulisPertanyaan("Masukkan email anda : ");
//   const noHp = await contact.tulisPertanyaan("Masukkan No HP anda : ");

//   contact.simpanContact(nama, email, noHp);
// };

// main();
