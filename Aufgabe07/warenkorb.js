"use strict";
var aufgabe07;
(function (aufgabe07) {
    let gesamtpreis = 0;
    let pGesamtpreis = document.createElement("p");
    let countTo = parseInt(localStorage.getItem("anzahlArtikel"));
    createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i <= countTo - 1; i++) {
            //Div-Elemente erstellen
            let newDiv = document.createElement("div");
            document.getElementById("warenkorbartikel").appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = localStorage.getItem("product-img" + i);
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //Name
            let name = document.createElement("h1");
            name.innerHTML = localStorage.getItem("product-name" + i);
            name.classList.add("product-name");
            //Beschreibung
            let desc = document.createElement("p");
            desc.innerHTML = localStorage.getItem("product-desc" + i);
            newDiv.appendChild(desc);
            //Farbe
            let colour = document.createElement("p");
            desc.innerHTML = localStorage.getItem("product-colour" + i);
            newDiv.appendChild(colour);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + i);
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let setButton = document.createElement("button");
            setButton.innerHTML = "Delet";
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
        for (let index = 0; index <= countTo - 1; index++) {
            try {
                document.getElementById("divId" + index).remove();
            }
            catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            pGesamtpreis.innerHTML = 0 + "€";
            gesamtpreisAusgeben();
            localStorage.clear();
        }
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map