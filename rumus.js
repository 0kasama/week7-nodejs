function rumusLuasPersegi(sisi) {
    return sisi * sisi;
}

function rumusKelPersegi(sisi) {
    return 4 * sisi;
}

function rumusLuasPersegiPjg(panjang, lebar) {
    return panjang * lebar;
}

function rumusKelPersegiPjg(panjang, lebar) {
    return 2 * (panjang + lebar);
}

module.exports = {
    rumusLuasPersegi,
    rumusKelPersegi,
    rumusLuasPersegiPjg,
    rumusKelPersegiPjg,
};