
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
function HarommalOszthatokSzama(t: number[]): number {
   var db: number = 0;
   for (var szam of t) {
      szam % 3 == 0 ? db += 1 : false
   }
   return db
}

document.write(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));