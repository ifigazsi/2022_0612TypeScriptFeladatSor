//1. Feladat
function DiakInfo(nev, csoport, tipus) {
    var szam = String(csoport);
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
document.write(DiakInfo("Minta Marton", 81, false));
