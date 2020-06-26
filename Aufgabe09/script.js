"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let newButton1 = document.getElementById("buttonhtml");
    newButton1.addEventListener("click", handleHtml);
    let newButton2 = document.getElementById("buttonjson");
    newButton2.addEventListener("click", handleJson);
    let _url;
    //Die Formulardaten werden an den URL gehängt - HTML
    async function handleHtml() {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        urlErstellen();
        _url = _url + "/html" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        let ausgabe = document.getElementById("htmlAusgabe");
        ausgabe.innerHTML = response2;
        console.log(response2);
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }
    async function handleJson() {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        urlErstellen();
        _url = _url + "/json" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text(); //oder .json
        console.log(response2);
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }
    function urlErstellen() {
        _url = "https://gissoserosl.herokuapp.com/";
        //_url = "http://localhost:8100";
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map