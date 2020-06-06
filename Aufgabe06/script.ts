namespace Aufgabe06 {

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
        colour.classList.add("product-desc");
        newDiv.appendChild(colour);
        //Preis
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = data[i].price + "€";
        newDiv.appendChild(price);
        //button
        let setButton: HTMLButtonElement = document.createElement("button");
        setButton.innerHTML = "buy";
        setButton.setAttribute("id", "button" + i);
        setButton.setAttribute("price", data[i].price.toString()); //preis wird als String angegeben
        setButton.addEventListener("click", counterbutton);
        newDiv.appendChild(setButton);

        document.getElementById(data[i].category + ("-grid"))?.appendChild(newDiv);
    }

    //Variablen
    let counterbeginn: number = 0;
    let summe: number = 0;
    //Counter erstellen
    let warenkorb: HTMLParagraphElement = document.createElement("p");
    //ArtikelZähler Div erstellen
    let az: HTMLDivElement = document.createElement("div");
    az.id = "az";

    function counterbutton(_event: Event): void { 
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
        let buttonPress: HTMLButtonElement = <HTMLButtonElement>_event.target; //ignorieren von button fehler meldung
        let priceButton: string = <string>buttonPress.getAttribute("price");
        let preisKommazahl: number = parseFloat(priceButton); //von String in Kommazahl
        summe += preisKommazahl;
        console.log(summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
    }

}
//# sourceMappingURL=tsInterface.js.map