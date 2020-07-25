namespace Endabgabe {
    let formularButton: HTMLElement = <HTMLElement>document.getElementById("bestellungAbsenden");
    formularButton.addEventListener("click", formularClick);
    



    async function formularClick(): Promise<void> { 
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissoserosl.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
    }

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
    let formData: FormData; //mit form data kann man sich die datein aus dem formular holen
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("bestellungAbsenden"));
    newButton.addEventListener("click", handleHtml);
   
    let url: string; //deklariere globale variable url. Wird hier deviniert damit es in allen funtionen benutzt werden können

    //Die Formulardaten werden an den URL gehängt - HTML
    async function handleHtml(): Promise<void> { 
        formData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData); // mit hilfe von urlSearParems wereden die formulardaten im query string gespeichert
        urlErstellen(); //url wird in die funktion eingelesenund ggf. auf den standartwert zureck gesetzt
        url = url + "/html" + "?" + query.toString(); //and die url wird der pfad und der querry string angehängt. In diesem Fall html
        //Die Antwort wird vom Server geholt
        let response1: Response = await fetch(url, { method: "get" }); //antwort wird mit hilfe von fetch anden server gesendet
        let response2: string = await response1.text(); //man erhält die antwort vom server und speichert diese als text
        let ausgabe: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("htmlAusgabe")); //paragraphen element wird aus html code geholt. 
        ausgabe.innerHTML = response2; //antwort des servers wir in html gespeichert
        console.log(response2); //antwort des servers wird in console ausgegeben
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }

    function urlErstellen(): void { //der variable wird die url zugewiesen
        //url = "https://gissoserosl.herokuapp.com";
        url = "http://localhost:8100";
    }

}
