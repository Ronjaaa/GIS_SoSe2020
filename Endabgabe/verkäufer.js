"use strict";
var Endabgabe;
(function (Endabgabe) {
    let newButton = document.getElementById("bestellungAnzeigen");
    newButton.addEventListener("click", handleNewButton);
    let text = document.getElementById("bestellungen");
    let formData;
    async function handleNewButton() {
        console.log("Listening");
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gissoserosl.herokuapp.com";
        url = url + "/holen" + "?" + query.toString();
        let response = await fetch(url);
        let responsestring = await response.text();
        text.innerHTML = responsestring;
    }
    //Bestellung löschen
    let löschButton = document.getElementById("bestellungLöschen");
    löschButton.addEventListener("click", handleLöschButton);
    let url;
    async function handleLöschButton() {
        // tslint:disable-next-line: no-any
        urlErstellen();
        formData = new FormData(document.forms[0]);
        url = url + "/loeschen" + "?";
        console.log(url);
        await fetch(url);
        console.log("test123");
        urlErstellen();
    }
    function urlErstellen() {
        url = "https://gissoserosl.herokuapp.com";
        //url = "http://localhost:8100";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=verkäufer.js.map