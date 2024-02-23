const rumus = require('./rumus.js')

const sisiPersegi = 10;
const luasPersegi = rumus.rumusLuasPersegi(sisiPersegi);
const kelPersegi = rumus.rumusKelPersegi(sisiPersegi);

console.log(`Luas persegi adalah: ${luasPersegi}, dan Keliling Persegi adalah: ${kelPersegi}`);

const panjang = 5;
const lebar = 10;
const luasPersegiPjg = rumus.rumusLuasPersegiPjg(panjang, lebar);
const kelPersegiPjg = rumus.rumusKelPersegiPjg(panjang, lebar);

console.log(`Luas persegi adalah: ${luasPersegiPjg}, dan Keliling Persegi adalah: ${kelPersegiPjg}`);