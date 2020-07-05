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
        colour.classList.add("product-colour");
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
    let anzahl = 0;
    let summe = 0;
    //Counter erstellen
    let counter = document.createElement("span");
    function counterbutton(_event) {
        if (anzahl == 0) {
            document.getElementById("shoppingcart")?.appendChild(counter);
        }
        //in Kreis anzeigen lassen
        anzahl++;
        counter.innerText = "" + anzahl;
        document.getElementById("artikelzaehler")?.appendChild(counter);
        //console.log("Anzahl Artikel: " + anzahl);
        //Summe berechnen
        let buttonPress = _event.target; //ignorieren von button fehler meldung
        let priceButton = buttonPress.getAttribute("price");
        let preisKommazahl = parseFloat(priceButton); //von String in Kommazahl
        summe += preisKommazahl;
        console.log("Summe: " + summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
    }
    //Kategorien ausblenden
    let ankerAlles = document.createElement("a");
    ankerAlles.innerText = " | Alles |";
    ankerAlles.setAttribute("id", "alleszeigen");
    ankerAlles.classList.add("navigationstext");
    ankerAlles.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerAlles);
    let ankerClothes = document.createElement("a");
    ankerClothes.innerText = " Clothes |";
    ankerClothes.setAttribute("id", "clotheszeigen");
    ankerClothes.classList.add("navigationstext");
    ankerClothes.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerClothes);
    let ankerNutrition = document.createElement("a");
    ankerNutrition.innerText = " Nutrition";
    ankerNutrition.setAttribute("id", "nutritionzeigen");
    ankerNutrition.classList.add("navigationstext");
    ankerNutrition.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerNutrition);
    function einausBlenden(_event) {
        if (_event.currentTarget.getAttribute("id") == "alleszeigen") {
            document.getElementById("clothes-grid").style.display = "grid";
            document.getElementById("Nutrition-grid").style.display = "grid";
            document.getElementById("clothes").style.display = "block";
            document.getElementById("nutrition").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "clotheszeigen") {
            document.getElementById("clothes-grid").style.display = "grid";
            document.getElementById("Nutrition-grid").style.display = "none";
            document.getElementById("clothes").style.display = "block";
            document.getElementById("nutrition").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "nutritionzeigen") {
            document.getElementById("clothes-grid").style.display = "none";
            document.getElementById("Nutrition-grid").style.display = "grid";
            document.getElementById("clothes").style.display = "none";
            document.getElementById("nutrition").style.display = "block";
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=tsInterface.js.map
//# sourceMappingURL=script.js.map