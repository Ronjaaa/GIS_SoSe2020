"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.data = [];
    async function ladeArtikelVonJSON(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Endabgabe.data = JSON.parse(JSON.stringify(respJSON));
        Endabgabe.erstelleArtikel();
    }
    Endabgabe.ladeArtikelVonJSON = ladeArtikelVonJSON;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Artikel.js.map