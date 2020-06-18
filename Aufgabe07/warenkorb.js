"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let gesamtpreis = 0;
    let pGesamtpreis = document.createElement("p");
    //let countTo: number = parseInt(localStorage.getItem("anzahlArtikel")!);
    let warenkorbDaten = JSON.parse(localStorage.getItem("warenkorb"));
    console.log(warenkorbDaten);
    function init(_event) {
        createWarenkorbArtikel();
    }
    //createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i < warenkorbDaten.length; i++) {
            //Div-Elemente erstellen
            let newDiv = document.createElement("div");
            document.getElementById("warenkorbArtikel").appendChild(newDiv);
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
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + parseFloat(price.innerHTML);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            gesamtpreisAusgeben();
        }
        function artikelLöschen(_event) {
            //Gesampreis reduzieren
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            gesamtpreis = gesamtpreis - parseFloat(preisString);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            gesamtpreisAusgeben();
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
        removeAll();
    }
    //Gesamtpreis ausgeben
    function gesamtpreisAusgeben() {
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    }
    function removeAll() {
        let remButton = document.getElementById("liRemoveAll");
        remButton.addEventListener("click", handleRemoveAll);
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        //update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map