//1. Feladat
function DiakInfo(nev, csoport, tipus) {
    var szam = String(csoport).length == 1 ? szam = "0".concat(csoport) : szam = String(csoport);
    var szoveg = "".concat(nev, " [TEAM").concat(szam, "] - ");
    tipus ? szoveg += "Junior Frontend" : szoveg += "Webprogramozó";
    return szoveg;
}
document.write(DiakInfo("Minrt Marci", 10, false));
//2. Feladat
function SzovegesErtekeles(jegy) {
    var szorgalom = ["NA", "NA", "Hanyag", "Változó", "Jó", "Példás"];
    var magatartas = ["NA", "NA", "Rossz", "Változó", "Jó", "Példás"];
    return [szorgalom[jegy], magatartas[jegy]];
}
//3. Feladat
