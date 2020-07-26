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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=verkäufer.js.map