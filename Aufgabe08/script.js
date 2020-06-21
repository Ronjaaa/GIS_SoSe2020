"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let newButton = document.getElementById("button");
    newButton.addEventListener("click", handleButton);
    //Die Formulardaten werden an den URL gehängt
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://gissoserosl.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function handleButton() {
        getResponse(await addToURL());
    }
    //Die Antwort wird vom Server geholt
    async function getResponse(_url) {
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        console.log(response2);
        console.log("test123");
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map