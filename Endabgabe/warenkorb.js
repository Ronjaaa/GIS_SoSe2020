"use strict";
var Endabgabe;
(function (Endabgabe) {
    let formularButton = document.getElementById("bestellungAbsenden");
    formularButton.addEventListener("click", formularClick);
    async function formularClick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissoserosl.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
    }
    window.addEventListener("load", init);
    let gesamtpreis = 0;
    let pGesamtpreis = document.createElement("p");
    pGesamtpreis.innerText = "0,00 €";
    //Gesamtpreis ausgeben
    document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    let warenkorbDaten = JSON.parse(localStorage.getItem("warenkorb"));
    console.log(warenkorbDaten);
    function init(_event) {
        if (warenkorbDaten[0] !== undefined) {
            createWarenkorbArtikel();
        }
    }
    //createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i < warenkorbDaten.length; i++) {
            //Div-Elemente erstellen
            let newDiv = document.createElement("div");
            document.getElementById("warenkorbartikel").appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = warenkorbDaten[i].img;
            imgElement.alt = warenkorbDaten[i].name;
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //Name
            let name = document.createElement("h1");
            name.innerHTML = warenkorbDaten[i].name;
            newDiv.appendChild(name);
            name.classList.add("product-name");
            //Preis
            let price = document.createElement("p");
            price.innerHTML = warenkorbDaten[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let setButton = document.createElement("button");
            setButton.innerHTML = "Delete";
            newDiv.appendChild(setButton);
            setButton.addEventListener("click", artikelLöschen);
            setButton.setAttribute("indexPreis", i.toString());
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + warenkorbDaten[i].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
        function artikelLöschen(_event) {
            //Gesampreis reduzieren
            let indexPreis = parseInt(_event.currentTarget.getAttribute("indexPreis"));
            gesamtpreis = gesamtpreis - warenkorbDaten[indexPreis].price;
            pGesamtpreis.innerHTML = gesamtpreis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
    }
    //Button alles löschen
    let allesLoeschButton = document.createElement("button");
    allesLoeschButton.innerHTML = "Delete All";
    document.getElementById("allesLoeschen")?.appendChild(allesLoeschButton);
    allesLoeschButton.addEventListener("click", handleRemoveAll);
    function handleRemoveAll(_event) {
        localStorage.clear();
        location.reload();
    }
    //Datenbank
    let formData; //mit form data kann man sich die datein aus dem formular holen
    let newButton = document.getElementById("bestellungAbsenden");
    newButton.addEventListener("click", handleHtml);
    let url; //deklariere globale variable url. Wird hier deviniert damit es in allen funtionen benutzt werden können
    //Die Formulardaten werden an den URL gehängt - HTML
    async function handleHtml() {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData); // mit hilfe von urlSearParems wereden die formulardaten im query string gespeichert
        urlErstellen(); //url wird in die funktion eingelesenund ggf. auf den standartwert zureck gesetzt
        url = url + "/html" + "?" + query.toString(); //and die url wird der pfad und der querry string angehängt. In diesem Fall html
        //Die Antwort wird vom Server geholt
        let response1 = await fetch(url, { method: "get" }); //antwort wird mit hilfe von fetch anden server gesendet
        let response2 = await response1.text(); //man erhält die antwort vom server und speichert diese als text
        let ausgabe = document.getElementById("htmlAusgabe"); //paragraphen element wird aus html code geholt. 
        ausgabe.innerHTML = response2; //antwort des servers wir in html gespeichert
        console.log(response2); //antwort des servers wird in console ausgegeben
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }
    function urlErstellen() {
        url = "https://gissoserosl.herokuapp.com";
        //url = "http://localhost:8100";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=warenkorb.js.map