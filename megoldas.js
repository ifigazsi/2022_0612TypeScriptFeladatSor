//1. Feladat
function DiakInfo(nev, csoport, tipus) {
    var szam = String(csoport); //ha a csoport szám kisebb, mint 10 elétesz egy 0-t:  azaz 9 -> 09
    if (szam.length < 2) {
        szam = "0".concat(szam);
    }
    var szoveg = "".concat(nev, " [TEAM").concat(szam, "] - ");
    if (tipus) {
        szoveg += "Junior Frontend";
    }
    else {
        szoveg += "Webprogramoz\u00F3";
    }
    return szoveg;
}
//2. Feladat
function SzovegesErtekeles(jegy) {
    var szorgalom = ["NA", "NA", "Hanyag", "Változó", "Jó", "Példás"];
    var magatartas = ["NA", "NA", "Rossz", "Változó", "Jó", "Példás"];
    return [szorgalom[jegy], magatartas[jegy]];
}
