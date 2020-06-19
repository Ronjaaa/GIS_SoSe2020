"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let gesamtpreis = 0;
    let pGesamtpreis = document.createElement("p");
    pGesamtpreis.innerText = "0,00 €";
    //Gesamtpreis ausgeben
    document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    let warenkorbDaten = JSON.parse(localStorage.getItem("warenkorb"));
    console.log(warenkorbDaten);
    function init(_event) {
        if (warenkorbDaten[0] !== undefined) {
            createWarenkorbArtikel();
        }
    }
    //createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i < warenkorbDaten.length; i++) {
            //Div-Elemente erstellen
            let newDiv = document.createElement("div");
            document.getElementById("warenkorbartikel").appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = warenkorbDaten[i].img;
            imgElement.alt = warenkorbDaten[i].name;
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //Name
            let name = document.createElement("h1");
            name.innerHTML = warenkorbDaten[i].name;
            newDiv.appendChild(name);
            name.classList.add("product-name");
            //Beschreibung
            let desc = document.createElement("p");
            desc.innerHTML = warenkorbDaten[i].description;
            newDiv.appendChild(desc);
            //Farbe
            let colour = document.createElement("p");
            desc.innerHTML = warenkorbDaten[i].colour;
            newDiv.appendChild(colour);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = warenkorbDaten[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let setButton = document.createElement("button");
            setButton.innerHTML = "Delete";
            newDiv.appendChild(setButton);
            setButton.addEventListener("click", artikelLöschen);
            setButton.setAttribute("indexPreis", i.toString());
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + warenkorbDaten[i].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
        function artikelLöschen(_event) {
            //Gesampreis reduzieren
            let indexPreis = parseInt(_event.currentTarget.getAttribute("indexPreis"));
            gesamtpreis = gesamtpreis - warenkorbDaten[indexPreis].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
    }
    //Button alles löschen
    let allesLoeschButton = document.createElement("button");
    allesLoeschButton.innerHTML = "Delete All";
    document.getElementById("allesLoeschen")?.appendChild(allesLoeschButton);
    allesLoeschButton.addEventListener("click", handleRemoveAll);
    function handleRemoveAll(_event) {
        localStorage.clear();
        location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map