"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.data = [];
    async function ladeArtikelVonJSON(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Aufgabe07.data = JSON.parse(JSON.stringify(respJSON));
        Aufgabe07.erstelleArtikel();
    }
    Aufgabe07.ladeArtikelVonJSON = ladeArtikelVonJSON;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=Artikel.js.map