//1. Feladat
function DiakInfo(nev, csoport, tipus) {
    var szam = String(csoport).length == 1 ? szam = "0".concat(csoport) : szam = String(csoport);
    var szoveg = "".concat(nev, " [TEAM").concat(szam, "] - ");
    tipus ? szoveg += "Junior Frontend" : szoveg += "Webprogramozó";
    return szoveg;
}
//2. Feladat
function SzovegesErtekeles(jegy) {
    var szorgalom = ["NA", "NA", "Hanyag", "Változó", "Jó", "Példás"];
    var magatartas = ["NA", "NA", "Rossz", "Változó", "Jó", "Példás"];
    return [szorgalom[jegy], magatartas[jegy]];
}
//3. Feladat
function HarommalOszthatokSzama(t) {
    var db = 0;
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var szam = t_1[_i];
        szam % 3 == 0 ? db += 1 : false;
    }
    return db;
}
document.write(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
