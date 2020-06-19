namespace Aufgabe07 {
    window.addEventListener("load", init);
    let gesamtpreis: number = 0;
    let pGesamtpreis: HTMLParagraphElement = document.createElement("p");
    pGesamtpreis.innerText = "0,00 €";
    //Gesamtpreis ausgeben
    document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

    let warenkorbDaten: Artikel[] = JSON.parse(localStorage.getItem("warenkorb")!);
    console.log(warenkorbDaten);
    function init(_event: Event): void {
        if (warenkorbDaten[0] !== undefined) {
            createWarenkorbArtikel();
        }
    }

    //createWarenkorbArtikel();
    function createWarenkorbArtikel(): void {
        for (let i: number = 0; i < warenkorbDaten.length; i++) {
            //Div-Elemente erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementById("warenkorbartikel")).appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //Bild
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = warenkorbDaten[i].img;
            imgElement.alt = warenkorbDaten[i].name;
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //Name
            let name: HTMLHeadingElement = document.createElement("h1");
            name.innerHTML = warenkorbDaten[i].name;
            newDiv.appendChild(name);
            name.classList.add("product-name");
            //Beschreibung
            let desc: HTMLParagraphElement = document.createElement("p");
            desc.innerHTML = warenkorbDaten[i].description;
            newDiv.appendChild(desc);
            //Farbe
            let colour: HTMLSpanElement = document.createElement("p");
            desc.innerHTML = warenkorbDaten[i].colour;
            newDiv.appendChild(colour);
            //Preis
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = warenkorbDaten[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let setButton: HTMLButtonElement = document.createElement("button");
            setButton.innerHTML = "Delete";
            newDiv.appendChild(setButton);
            setButton.addEventListener("click", artikelLöschen);
            setButton.setAttribute("indexPreis", i.toString());
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + warenkorbDaten[i].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }

        function artikelLöschen(_event: Event): void {
            //Gesampreis reduzieren
            let indexPreis: number = parseInt((<HTMLElement>_event.currentTarget).getAttribute("indexPreis")!);
            gesamtpreis = gesamtpreis - warenkorbDaten[indexPreis].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

            //Artikel Löschen
            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        }
    }

    //Button alles löschen
    let allesLoeschButton: HTMLButtonElement = document.createElement("button");
    allesLoeschButton.innerHTML = "Delete All";
    document.getElementById("allesLoeschen")?.appendChild(allesLoeschButton);
    allesLoeschButton.addEventListener("click", handleRemoveAll);

    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        location.reload();
    }

}
