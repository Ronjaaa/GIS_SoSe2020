"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    //Ausgabe Serverstart
    console.log("Server wird gestartet");
    //port Vairable erstellen und port zuweisen
    let port = (process.env.PORT);
    //port überprüfen und gegebenfalls setzen
    if (port == undefined)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        //Server variable erstellen
        let server = Http.createServer();
        console.log("Server starting Port:" + _port);
        //server soll auf port hören und schauen ob es dort anfragen gibt.
        server.listen(_port);
        //handler hinzufügen
        server.addListener("request", handleRequest);
    }
    //Konsolenausgabe
    function handleListen() {
        console.log("Ich höre dich");
    }
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let orders = mongoClient.db("Eisdiele").collection("Bestellungen");
    orders.insert({ ... });
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map