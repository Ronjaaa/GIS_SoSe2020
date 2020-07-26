namespace Endabgabe {
    ladeArtikelVonJSON("speicher.json");
    export function erstelleArtikel(): void {

        //Variablen
        let anzahl: number = 0;
        let summe: number = 0;
        let artikelImWarenkorb: Artikel[] = [];
        //Counter erstellen
        let counter: HTMLSpanElement = document.createElement("span");

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
            //Preis
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = data[i].price.toFixed(2) + "€";
            newDiv.appendChild(price);
            //buttonadd
            let setButton: HTMLButtonElement = document.createElement("button");
            setButton.innerHTML = "add";
            setButton.setAttribute("eisgenerator", data[i].img.toString());
            setButton.addEventListener("click", handleCounterButton.bind(data[i]));
            newDiv.appendChild(setButton);
            //Buttondelte
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "delete";
            deleteButton.setAttribute("id", "button" + i);
            deleteButton.addEventListener("click", handleDeleteButton.bind(data[i]));
            newDiv.appendChild(deleteButton);

            function handleCounterButton(this: Artikel, _event: Event): void {

                console.log(this);
                if (anzahl == 0) {
                    document.getElementById("shoppingcart")?.appendChild(counter);
                }
                //Eisgenerator
                let eisgeneratorButtonpress: HTMLImageElement = <HTMLImageElement>_event.target;
                let eisgeneratorButton: string = eisgeneratorButtonpress.getAttribute("eisgenerator") + "";
                let productImg: HTMLImageElement = document.createElement("img");
                productImg.setAttribute("class", "eisgeneratorbild");
                productImg.setAttribute("id", "eisgeneratorbild" + i);
                productImg.setAttribute("src", data[i].img);
                document.getElementById("eisgenerator")?.appendChild(productImg);
                console.log("Eisgereator: " + eisgeneratorButton);

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

            function handleDeleteButton(this: Artikel, _event: Event): void {
                //Counter reduzieren
                if (anzahl >= 1) {
                    anzahl--;
                    counter.innerText = "" + anzahl;
                }
                document.getElementById("artikelzaehler")?.appendChild(counter);
                //aus Eisgenerator löschen
                document.getElementById("eisgeneratorbild" + i)?.remove();
                //aus Warenkorb löschen
            }

            document.getElementById(data[i].category + ("-grid"))?.appendChild(newDiv);
        }
    }

    //Kategorien ausblenden
    let ankerAlles: HTMLAnchorElement = document.createElement("a");
    ankerAlles.innerText = " | Alles |";
    ankerAlles.setAttribute("id", "alleszeigen");
    ankerAlles.classList.add("navigationstext");
    ankerAlles.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerAlles);

    let ankerBasis: HTMLAnchorElement = document.createElement("a");
    ankerBasis.innerText = " Eisbasis |";
    ankerBasis.setAttribute("id", "eisbasisanzeigen");
    ankerBasis.classList.add("navigationstext");
    ankerBasis.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerBasis);

    let ankerEis: HTMLAnchorElement = document.createElement("a");
    ankerEis.innerText = " Eissorten |";
    ankerEis.setAttribute("id", "eissortenzeigen");
    ankerEis.classList.add("navigationstext");
    ankerEis.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerEis);

    let ankerToppings: HTMLAnchorElement = document.createElement("a");
    ankerToppings.innerText = " Toppings";
    ankerToppings.setAttribute("id", "toppingszeigen");
    ankerToppings.classList.add("navigationstext");
    ankerToppings.addEventListener("click", einausBlenden);
    document.getElementById("menue")?.appendChild(ankerToppings);

    function einausBlenden(_event: Event): void {
        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "alleszeigen") {
            (<HTMLDivElement>document.getElementById("eissorten-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("toppings-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("eisbasis-grid")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("eissorten")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("toppings")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("eisbasis")).style.display = "block";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "eisbasisanzeigen") {
            (<HTMLDivElement>document.getElementById("eisbasis-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("eissorten-grid")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-grid")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("eisbasis")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("eissorten")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("toppings")).style.display = "none";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "eissortenzeigen") {
            (<HTMLDivElement>document.getElementById("eisbasis-grid")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eissorten-grid")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("toppings-grid")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("eisbasis")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("eissorten")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("toppings")).style.display = "none";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "toppingszeigen") {
            (<HTMLDivElement>document.getElementById("eisbasis-grid")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eissorten-grid")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-grid")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("eisbasis")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("eissorten")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("toppings")).style.display = "block";
        }
    }
}
//# sourceMappingURL=tsInterface.js.map
