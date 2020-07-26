"use strict";
var Endabgabe;
(function (Endabgabe) {
    let newButton = document.getElementById("bestellungenAnzeigen");
    newButton.addEventListener("click", handleNewButton);
    let formData;
    async function handleNewButton() {
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gissoserosl.herokuapp.com";
        url = url + "/holen" + "?" + query.toString();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=verkäufer.js.map