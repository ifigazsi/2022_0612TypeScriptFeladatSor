
//1. Feladat
function DiakInfo(nev: string, csoport: number, tipus: boolean) {
   var szam: string = String(csoport) //ha a csoport szám kisebb, mint 10 elétesz egy 0-t:  azaz 9 -> 09
   if (szam.length < 2) {
      szam = `0${szam}`;
   }
   var szoveg: string = `${nev} [TEAM${szam}] - `;
   if (tipus) {
      szoveg += `Junior Frontend`
   } else {
      szoveg += `Webprogramozó`
   }
   return szoveg
}

//2. Feladat

