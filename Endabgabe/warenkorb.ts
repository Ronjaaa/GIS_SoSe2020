namespace Endabgabe {

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

    //Bestellung anzeigen
    let bestellformular: HTMLElement = <HTMLElement>document.getElementById("bestellung");
    bestellformular.setAttribute("value", <string>localStorage.getItem("warenkorb")!);

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

    //Datenbank
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("bestellungAbsenden"));
    newButton.addEventListener("click", handleNewButton);

    let url: string;

    async function handleNewButton(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlErstellen();
        formData = new FormData(document.forms[0]);

        url = url + "/senden" + "?" + query.toString();
        url = "https://gissoserosl.herokuapp.com";

        console.log(url);
        await fetch(url);
        console.log("test123");
        urlErstellen();
    }

    function urlErstellen(): void {
        url = "https://gissoserosl.herokuapp.com";
        //url = "http://localhost:8100";
    }

}
