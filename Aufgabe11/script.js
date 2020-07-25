"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData; //mit form data kann man sich die datein aus dem formular holen
    let newButton1 = document.getElementById("buttonhtml");
    newButton1.addEventListener("click", handleHtml);
    let newButton2 = document.getElementById("buttonjson");
    newButton2.addEventListener("click", handleJson); //2 button elemente verlinkt/geholt von html und gebe ihnen event listener damit die fntionen asugeführt werden
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
    async function handleJson() {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        urlErstellen();
        url = url + "/json" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1 = await fetch(url, { method: "get" });
        let response2 = await response1.json(); //man erhält die antwort vom server und speichert diese als javascriptObjekt
        console.log(response2); //antwort des servers wird in console ausgegeben
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }
    function urlErstellen() {
        url = "https://gissoserosl.herokuapp.com";
        //_url = "http://localhost:8100";
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map