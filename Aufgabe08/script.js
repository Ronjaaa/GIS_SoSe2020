"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let newButton = document.getElementById("button");
    newButton.addEventListener("click", handleButton);
    //Die Formulardaten werden an den URL gehängt
    async function addToURL(_url) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        console.log(response2);
        console.log("test123");
    }
    function handleButton(_event) {
        addToURL("https://gissoserosl.herokuapp.com/");
        //addToURL("http://localhost:8100");
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map