"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let bestellungenList;
    let databaseUrl = "mongodb+srv://RonjaS:gis123@gis-ist-geil.rwghv.mongodb.net/Eisdiele?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb://localhost: 27017";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    connectToDatabase(databaseUrl);
    //Server und Listener erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bestellungenList = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database connection ", bestellungenList != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    //Server Daten erhalten 
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/senden")
                bestellungenList.insertOne(url.query);
            else if (url.pathname == "/holen") {
                _response.write(JSON.stringify(await bestellungenList.find().toArray()));
            }
            else if (url.pathname == "/loeschen") {
                bestellungenList.drop();
            }
        }
        console.log(_request.url);
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map