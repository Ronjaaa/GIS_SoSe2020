import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {
    //Ausgabe Serverstart
    console.log("Server wird gestartet");
    //port Vairable erstellen und port zuweisen
    let port: number | string | undefined = (process.env.PORT);
    //port überprüfen und gegebenfalls setzen
    if (port == undefined)
        port = 8100;

    startServer(port);

    function startServer (_port: number | string): void {
        //Server variable erstellen
        let server: Http.Server = Http.createServer();
        console.log("Server starting Port:" + _port);

        //server soll auf port hören und schauen ob es dort anfragen gibt.
        server.listen(_port);
        //handler hinzufügen
        server.addListener("request", handleRequest);
    }

    //Konsolenausgabe
    function handleListen(): void {
        console.log("Ich höre dich");
    }

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    let orders: Mongo.Collection = mongoClient.db("Eisdiele").collection("Bestellungen");
    orders.insert({ ...});


}