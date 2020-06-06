"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.data.length; i++) {
        //Div-Elemente erstellen
        let newDiv = document.createElement("div");
        newDiv.classList.add("product");
        //Bild
        let productImg = document.createElement("img");
        productImg.src = Aufgabe06.data[i].img;
        productImg.alt = Aufgabe06.data[i].name;
        productImg.classList.add("product-img");
        newDiv.appendChild(productImg);
        //Name
        let name = document.createElement("h1");
        name.innerText = Aufgabe06.data[i].name;
        name.classList.add("product-name");
        newDiv.appendChild(name);
        //Beschreibung
        let describtion = document.createElement("p");
        describtion.innerText = Aufgabe06.data[i].description;
        describtion.classList.add("product-desc");
        newDiv.appendChild(describtion);
        //Farbe
        let colour = document.createElement("p");
        colour.innerText = Aufgabe06.data[i].colour;
        colour.classList.add("product-desc");
        newDiv.appendChild(colour);
        //Preis
        let price = document.createElement("p");
        price.innerHTML = Aufgabe06.data[i].price + "€";
        newDiv.appendChild(price);
        //button
        let setButton = document.createElement("button");
        setButton.innerHTML = "buy";
        setButton.setAttribute("id", "button" + i);
        setButton.setAttribute("price", Aufgabe06.data[i].price.toString()); //preis wird als String angegeben
        setButton.addEventListener("click", counterbutton);
        newDiv.appendChild(setButton);
        document.getElementById(Aufgabe06.data[i].category + ("-grid"))?.appendChild(newDiv);
    }
    //Variablen
    let counterbeginn = 0;
    let summe = 0;
    //Counter erstellen
    let warenkorb = document.createElement("p");
    //ArtikelZähler Div erstellen
    let az = document.createElement("div");
    az.id = "az";
    function counterbutton(_event) {
        if (counterbeginn > 0) {
            //warenkorb.innerHTML = warenkorb.toString();
            document.getElementById("sc")?.appendChild(az);
        }
        //in Kreis anzeigen lassen
        counterbeginn++;
        warenkorb.innerHTML = "" + counterbeginn;
        document.getElementById("az")?.appendChild(warenkorb);
        //console.log("Anzahl Artikel: " + counterbeginn);
        //Summe berechnen
        let buttonPress = _event.target; //ignorieren von button fehler meldung
        let priceButton = buttonPress.getAttribute("price");
        let preisKommazahl = parseFloat(priceButton); //von String in Kommazahl
        summe += preisKommazahl;
        console.log(summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=tsInterface.js.map
//# sourceMappingURL=script.js.map