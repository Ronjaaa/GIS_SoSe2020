namespace aufgabe07 {
    let gesamtpreis: number = 0;
    let pGesamtpreis: HTMLParagraphElement = document.createElement("p");
    let countTo: number = parseInt(localStorage.getItem("anzahlArtikel")!);

    createWarenkorbArtikel();
    function createWarenkorbArtikel(): void {
        for (let i: number = 0; i <= countTo - 1; i++) {
            //Div-Elemente erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementById("warenkorbartikel")).appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //Bild
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("product-img" + i)!;
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //Name
            let name: HTMLHeadingElement = document.createElement("h1");
            name.innerHTML = localStorage.getItem("product-name" + i)!;
            name.classList.add("product-name");
            //Beschreibung
            let desc: HTMLParagraphElement = document.createElement("p");
            desc.innerHTML = localStorage.getItem("product-desc" + i)!;
            newDiv.appendChild(desc);
            //Farbe
            let colour: HTMLSpanElement = document.createElement("p");
            desc.innerHTML = localStorage.getItem("product-colour" + i)!;
            newDiv.appendChild(colour);
            //Preis
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + i)!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let setButton: HTMLButtonElement = document.createElement("button");
            setButton.innerHTML = "Delet";
            newDiv.appendChild(setButton);
            setButton.addEventListener("click", artikelLöschen);
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + parseFloat(price.innerHTML);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            gesamtpreisAusgeben();
        }

        function artikelLöschen(_event: Event): void {
            //Gesampreis reduzieren
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
            gesamtpreis = gesamtpreis - parseFloat(preisString);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            gesamtpreisAusgeben();

            //Artikel Löschen
            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        }
        removeAll();
    }

    //Gesamtpreis ausgeben
    function gesamtpreisAusgeben(): void {
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    }


    function removeAll(): void {
        let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
        remButton.addEventListener("click", handleRemoveAll);
    }

    function handleRemoveAll(_event: Event): void {
        for (let index: number = 0; index <= countTo - 1; index++) {
            try {
                (<HTMLDivElement>document.getElementById("divId" + index)).remove();
            } catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            pGesamtpreis.innerHTML = 0 + "€";
            gesamtpreisAusgeben();
            localStorage.clear();
        }

    }
}