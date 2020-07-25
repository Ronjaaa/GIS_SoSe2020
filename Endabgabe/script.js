"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ladeArtikelVonJSON("speicher.json");
    function erstelleArtikel() {
        //Variablen
        let anzahl = 0;
        let summe = 0;
        let artikelImWarenkorb = [];
        //Counter erstellen
        let counter = document.createElement("span");
        for (let i = 0; i < Endabgabe.data.length; i++) {
            //Div-Elemente erstellen
            let newDiv = document.createElement("div");
            newDiv.classList.add("product");
            //Bild
            let productImg = document.createElement("img");
            productImg.src = Endabgabe.data[i].img;
            productImg.alt = Endabgabe.data[i].name;
            productImg.classList.add("product-img");
            newDiv.appendChild(productImg);
            //Name
            let name = document.createElement("h1");
            name.innerText = Endabgabe.data[i].name;
            name.classList.add("product-name");
            newDiv.appendChild(name);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = Endabgabe.data[i].price.toFixed(2) + "€";
            newDiv.appendChild(price);
            //buttonadd
            let setButton = document.createElement("button");
            setButton.innerHTML = "add";
            //setButton.setAttribute("id", "button" + i);
            //setButton.setAttribute("price", data[i].price.toString()); //preis wird als String angegeben
            //setButton.addEventListener("click", counterbutton);
            setButton.setAttribute("eisgenerator", Endabgabe.data[i].img.toString());
            setButton.addEventListener("click", handleCounterButton.bind(Endabgabe.data[i]));
            newDiv.appendChild(setButton);
            //Buttondelte
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "delete";
            deleteButton.setAttribute("id", "button" + i);
            deleteButton.addEventListener("click", handleDeleteButton.bind(Endabgabe.data[i]));
            newDiv.appendChild(deleteButton);
            function handleCounterButton(_event) {
                console.log(this);
                if (anzahl == 0) {
                    document.getElementById("shoppingcart")?.appendChild(counter);
                }
                //Eisgenerator
                let eisgeneratorButtonpress = _event.target;
                let eisgeneratorButton = eisgeneratorButtonpress.getAttribute("eisgenerator") + "";
                let productImg = document.createElement("img");
                productImg.setAttribute("class", "eisgeneratorbild");
                productImg.setAttribute("id", "eisgeneratorbild" + i);
                productImg.setAttribute("src", Endabgabe.data[i].img);
                document.getElementById("eisgenerator")?.appendChild(productImg);
                console.log("Eisgereator: " + eisgeneratorButton);
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
                artikelImWarenkorb.push(this);
                localStorage.setItem("warenkorb", JSON.stringify(artikelImWarenkorb));
                console.log(localStorage);
            }
            function handleDeleteButton(_event) {
                //Counter reduzieren
                if (anzahl >= 1) {
                    anzahl--;
                    counter.innerText = "" + anzahl;
                }
                document.getElementById("artikelzaehler")?.appendChild(counter);
                //aus Eisgenerator löschen
                document.getElementById("eisgeneratorbild" + i)?.remove();
                //aus Warenkorb löschen
                //let deletebuttonPress: HTMLButtonElement = <HTMLButtonElement>_event.target; //ignorieren von button fehler meldung
                //let delteButton: string = <string>deletebuttonPress.getAttribute("product");
                document.getElementById("artikeImWarenkorb" + i)?.remove();
                localStorage.removeItem("artikelImWarenkorb");
            }
            document.getElementById(Endabgabe.data[i].category + ("-grid"))?.appendChild(newDiv);
        }
    }
    Endabgabe.erstelleArtikel = erstelleArtikel;
    //Kategorien ausblenden
    let ankerAlles = document.createElement("a");
    ankerAlles.innerText = " | Alles |";
    ankerAlles.setAttribute("id", "alleszeigen");
    ankerAlles.classList.add("navigationstext");
    ankerAlles.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerAlles);
    let ankerBasis = document.createElement("a");
    ankerBasis.innerText = " Eisbasis |";
    ankerBasis.setAttribute("id", "eisbasisanzeigen");
    ankerBasis.classList.add("navigationstext");
    ankerBasis.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerBasis);
    let ankerEis = document.createElement("a");
    ankerEis.innerText = " Eissorten |";
    ankerEis.setAttribute("id", "eissortenzeigen");
    ankerEis.classList.add("navigationstext");
    ankerEis.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerEis);
    let ankerToppings = document.createElement("a");
    ankerToppings.innerText = " Toppings";
    ankerToppings.setAttribute("id", "toppingszeigen");
    ankerToppings.classList.add("navigationstext");
    ankerToppings.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerToppings);
    function einausBlenden(_event) {
        if (_event.currentTarget.getAttribute("id") == "alleszeigen") {
            document.getElementById("eissorten-grid").style.display = "grid";
            document.getElementById("toppings-grid").style.display = "grid";
            document.getElementById("eisbasis-grid").style.display = "grid";
            document.getElementById("eissorten").style.display = "block";
            document.getElementById("toppings").style.display = "block";
            document.getElementById("eisbasis").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "eisbasisanzeigen") {
            document.getElementById("eisbasis-grid").style.display = "grid";
            document.getElementById("eissorten-grid").style.display = "none";
            document.getElementById("toppings-grid").style.display = "none";
            document.getElementById("eisbasis").style.display = "block";
            document.getElementById("eissorten").style.display = "none";
            document.getElementById("toppings").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "eissortenzeigen") {
            document.getElementById("eisbasis-grid").style.display = "none";
            document.getElementById("eissorten-grid").style.display = "grid";
            document.getElementById("toppings-grid").style.display = "none";
            document.getElementById("eisbasis").style.display = "none";
            document.getElementById("eissorten").style.display = "block";
            document.getElementById("toppings").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "toppingszeigen") {
            document.getElementById("eisbasis-grid").style.display = "none";
            document.getElementById("eissorten-grid").style.display = "none";
            document.getElementById("toppings-grid").style.display = "grid";
            document.getElementById("eisbasis").style.display = "none";
            document.getElementById("eissorten").style.display = "none";
            document.getElementById("toppings").style.display = "block";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=tsInterface.js.map
//# sourceMappingURL=script.js.map