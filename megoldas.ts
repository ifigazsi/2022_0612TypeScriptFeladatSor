function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
   var szam: string = String(csoport).length == 1 ? szam = `0${csoport}` : szam = String(csoport)
   var szoveg: string = `${nev} [TEAM${szam}] - `;
   tipus ? szoveg += "Junior Frontend" : szoveg += "Webprogramozó"
   return szoveg
}

function SzovegesErtekeles(jegy: number): [string, string] {
   var szorgalom: string[] = ["NA", "NA", "Hanyag", "Változó", "Jó", "Példás"];
   var magatartas: string[] = ["NA", "NA", "Rossz", "Változó", "Jó", "Példás"];
   return [szorgalom[jegy], magatartas[jegy]]
}

function HarommalOszthatokSzama(t: number[]): number {
   var db: number = 0;
   for (var szam of t) {
      szam % 3 == 0 ? db += 1 : false
   }
   return db
}

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): string[] {
   var szamok: string[] = []; //feladatban nincs leírva, hogy szám tipust tartalmazó lista kell, hogy legyen 
   while (szamok.length != mennyiseg) {
      var generaltSzam: string = String(Math.floor(Math.random() * (felsoHatar + 1 - alsoHatar) + alsoHatar));
      if (!szamok.includes(generaltSzam)) {
         szamok.push(generaltSzam);
      }
   }
   return szamok
}