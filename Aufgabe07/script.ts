namespace Aufgabe07 {
    ladeArtikelVonJSON("speicher.json");
    export function erstelleArtikel(): void {
        for (let i: number = 0; i < data.length; i++) {
            //Div-Elemente erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.classList.add("product");
            //Bild
            let productImg: HTMLImageElement = document.createElement("img");
            productImg.src = data[i].img;
            productImg.alt = data[i].name;
            productImg.classList.add("product-img");
            newDiv.appendChild(productImg);
            //Name
            let name: HTMLHeadingElement = document.createElement("h1");
            name.innerText = data[i].name;
            name.classList.add("product-name");
            newDiv.appendChild(name);
            //Beschreibung
            let describtion: HTMLSpanElement = document.createElement("p");
            describtion.innerText = data[i].description;
            describtion.classList.add("product-desc");
            newDiv.appendChild(describtion);
            //Farbe
            let colour: HTMLSpanElement = document.createElement("p");
            colour.innerText = data[i].colour;
            colour.classList.add("product-colour");
            newDiv.appendChild(colour);
            //Preis
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = data[i].price + "€";
            newDiv.appendChild(price);
            //button
            let setButton: HTMLButtonElement = document.createElement("button");
            setButton.innerHTML = "buy";
            //setButton.setAttribute("id", "button" + i);
            //setButton.setAttribute("price", data[i].price.toString()); //preis wird als String angegeben
            //setButton.setAttribute("currentindex", i.toString());
            setButton.addEventListener("click", handleCounterButton.bind(data[i]));
            newDiv.appendChild(setButton);

            document.getElementById(data[i].category + ("-grid"))?.appendChild(newDiv);
        }
    }

    //Variablen
    let anzahl: number = 0;
    let summe: number = 0;
    let artikelImWarenkorb: Artikel[] = [];

    //Counter erstellen
    let counter: HTMLSpanElement = document.createElement("span");

    export function handleCounterButton(this: Artikel, _event: Event): void {
        console.log(this);
        if (anzahl == 0) {
            document.getElementById("shoppingcart")?.appendChild(counter);
        }

        //in Kreis anzeigen lassen
        anzahl++;
        counter.innerText = "" + anzahl;
        document.getElementById("artikelzaehler")?.appendChild(counter);
        //console.log("Anzahl Artikel: " + anzahl);

        //Summe berechnen
        let buttonPress: HTMLButtonElement = <HTMLButtonElement>_event.target; //ignorieren von button fehler meldung
        let priceButton: string = <string>buttonPress.getAttribute("price");
        let preisKommazahl: number = parseFloat(priceButton); //von String in Kommazahl
        summe += preisKommazahl;
        console.log("Summe: " + summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
        artikelImWarenkorb.push(this);
        localStorage.setItem("warenkorb", JSON.stringify(artikelImWarenkorb)); 
        console.log(localStorage);
    }

    //Kategorien ausblenden
    let ankerAlles: HTMLAnchorElement = document.createElement("a");
    ankerAlles.innerText = " | Alles |";
    ankerAlles.setAttribute("id", "alleszeigen");
    ankerAlles.classList.add("navigationstext");
    ankerAlles.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerAlles);

    let ankerClothes: HTMLAnchorElement = document.createElement("a");
    ankerClothes.innerText = " Clothes |";
    ankerClothes.setAttribute("id", "clotheszeigen");
    ankerClothes.classList.add("navigationstext");
    ankerClothes.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerClothes);

    let ankerNutrition: HTMLAnchorElement = document.createElement("a");
    ankerNutrition.innerText = " Nutrition";
    ankerNutrition.setAttribute("id", "nutritionzeigen");
    ankerNutrition.classList.add("navigationstext");
    ankerNutrition.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerNutrition);

    function einausBlenden(_event: Event): void {
        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "alleszeigen") {
            (<HTMLDivElement>document.getElementById("clothes-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("Nutrition-grid")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("clothes")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("nutrition")).style.display = "block";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "clotheszeigen") {
            (<HTMLDivElement>document.getElementById("clothes-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("Nutrition-grid")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("clothes")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("nutrition")).style.display = "none";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "nutritionzeigen") {
            (<HTMLDivElement>document.getElementById("clothes-grid")).style.display = "none";
            (<HTMLDivElement>document.getElementById("Nutrition-grid")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("clothes")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("nutrition")).style.display = "block";

        }
    }

}
//# sourceMappingURL=tsInterface.js.map