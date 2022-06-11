
//1. Feladat
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
   var szam: string = String(csoport).length == 1 ? szam = `0${csoport}` : szam = String(csoport)
   var szoveg: string = `${nev} [TEAM${szam}] - `;
   tipus ? szoveg += "Junior Frontend" : szoveg += "Webprogramozó"
   return szoveg
}

//2. Feladat
function SzovegesErtekeles(jegy: number): [string, string] {
   var szorgalom: string[] = ["NA", "NA", "Hanyag", "Változó", "Jó", "Példás"];
   var magatartas: string[] = ["NA", "NA", "Rossz", "Változó", "Jó", "Példás"];
   return [szorgalom[jegy], magatartas[jegy]]
}

//3. Feladat
