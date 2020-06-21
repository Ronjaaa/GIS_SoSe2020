"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let newButton = document.getElementById("button");
    newButton.addEventListener("click", handleButton);
    //Hängt Formulardaten an die URL
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = " https://gissoserosl.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function handleButton() {
        getResponse(await addToURL());
    }
    //Holt sich Antwort vom Server
    async function getResponse(_url) {
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        console.log(response2);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map