"use strict";
//Büro Artikel
let ordner = { img: "Büro/01.jpg", name: "Ordner | 1,50€", description: "Langweiliger Standard Ordner" };
let kugelschreiber = { img: "Büro/02.jpg", name: "Kugelschreiber | 13,30€", description: "Ein ganz besonderer Stift" };
let druckerpapier = { img: "Büro/03.PNG", name: "Druckerpapier | 3,45€", description: "Holz aus dem Schwarzwald " };
let locher = { img: "Büro/04.jpg", name: "Löchriger Locher | 2,50€", description: "Stanzt Löcher in Papier und Stein" };
let tacker = { img: "Büro/05.jpg", name: "Tacker | 3,50€", description: "Tackern statt Bohren" };
let druckerpatronen = { img: "Büro/06.PNG", name: "Druckerpatronen | 300,99€", description: "Füllt die innere Leere" };
let taschenrechner = { img: "Büro/07.PNG", name: "Taschenrechner | 0,50€", description: "Hack- und Programmierbar" };
let laminierfolien = { img: "Büro/08.PNG", name: "Laminierfolien | 2,80€", description: "Folien für Ihr Laminiergerät" };
let laminiergerät = { img: "Büro/09.PNG", name: "Ihr Laminiergerät | 25,22€", description: "Laminiergerät für Ihre Folien" };
let pointer = { img: "Büro/10.PNG", name: "Pointer | 4,50€", description: "Auch als Laserschwert nutzbar" };
let aktenschredder = { img: "Büro/11.PNG", name: "Aktenschredder | 74,50€", description: "Eignet sich auch als Fleischwolf" };
let ansteckmikro = { img: "Büro/12.PNG", name: "Ansteckmikro | 19,92€", description: "Hallo? Hören Sie mich?" };
//Artikel in Array
let artikelBüro = [ordner, kugelschreiber, druckerpapier, locher, tacker, druckerpatronen, taschenrechner, laminierfolien, laminiergerät, pointer, aktenschredder, ansteckmikro];
//Büro Artikel
let hühnerweste = { img: "Alltagsgegenstände/01.PNG", name: "Hühnerweste | 7,33€", description: "Schützen sie Ihre Hühner" };
let käsereibe = { img: "Alltagsgegenstände/02.PNG", name: "Jesus Käsereibe | 66,60€", description: "Holy Cheese!" };
let klotasse = { img: "Alltagsgegenstände/03.PNG", name: "Klotasse | 8,45€", description: "Schmeckt doch gleich besser" };
let gehirn = { img: "Alltagsgegenstände/04.PNG", name: "Notfall Gehirn | 12,73€", description: "Hilft bei Aussetzern" };
let kissen = { img: "Alltagsgegenstände/05.PNG", name: "Entertaste Kissen | 23,10€", description: "Funktioniert echt!" };
let schuhe = { img: "Alltagsgegenstände/06.PNG", name: "Putzschuhe | 0,90€", description: "So macht putzen spaß" };
let flipflop = { img: "Alltagsgegenstände/07.PNG", name: "Gras Flipflop | 11,99€", description: "Grasgefühl zwischen den Zehen" };
let kamm = { img: "Alltagsgegenstände/08.PNG", name: "Glatzenkamm | 23,80€", description: "Haarausfall? Abrasieren!" };
let badeente = { img: "Alltagsgegenstände/09.PNG", name: "Freud-Badeende | 7,25€", description: "Freud freut sich!" };
let bananenschneider = { img: "Alltagsgegenstände/10.PNG", name: "Bananen Schneider | 14,56€", description: "Schneidet auch Ihre Banane" };
let schnurrbart = { img: "Alltagsgegenstände/11.PNG", name: "Notfall Schnurrbart | 8,00€", description: "Nützlich in Notfällen" };
let chickenspray = { img: "Alltagsgegenstände/12.PNG", name: "Chickenspray | 36,92€", description: "Entfernt auch Fettflecken" };
//Artikel in Array
let artikelAlltag = [hühnerweste, käsereibe, klotasse, gehirn, kissen, schuhe, flipflop, kamm, badeente, bananenschneider, schnurrbart, chickenspray];
//CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE-CODE
//BÜRO
for (let index = 0; index < artikelBüro.length; index++) {
    //DIV GENERIEREN
    let newDiv = document.createElement("div");
    newDiv.id = "divNr" + index;
    document.getElementById("flexID")?.appendChild(newDiv);
    //IMG IN DIV PACKEN
    let imgElement = document.createElement("img");
    imgElement.src = artikelBüro[index].img;
    document.getElementById("divNr" + index)?.appendChild(imgElement);
    //NAME UND PREIS
    let namePrice = document.createElement("p");
    namePrice.innerHTML = artikelBüro[index].name;
    document.getElementById("divNr" + index)?.appendChild(namePrice);
    //BESCHREIBUNG
    let desc = document.createElement("p");
    desc.innerHTML = artikelBüro[index].description;
    document.getElementById("divNr" + index)?.appendChild(desc);
    //BUTTON
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("divNr" + index)?.appendChild(kaufen);
}
//ALLTAGSGEGENSTÄNDE
for (let index = 0; index < artikelAlltag.length; index++) {
    //DIV GENERIEREN
    let newDiv = document.createElement("div");
    newDiv.id = "divNr2" + index;
    document.getElementById("flexID2")?.appendChild(newDiv);
    //IMG IN DIV PACKEN
    let imgElement = document.createElement("img");
    imgElement.src = artikelAlltag[index].img;
    document.getElementById("divNr2" + index)?.appendChild(imgElement);
    //NAME UND PREIS
    let namePrice = document.createElement("p");
    namePrice.innerHTML = artikelAlltag[index].name;
    document.getElementById("divNr2" + index)?.appendChild(namePrice);
    //BESCHREIBUNG
    let desc = document.createElement("p");
    desc.innerHTML = artikelAlltag[index].description;
    document.getElementById("divNr2" + index)?.appendChild(desc);
    //BUTTON
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("divNr2" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=tsInterface.js.map