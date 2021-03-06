import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export namespace Endabgabe {

    let bestellungenList: Mongo.Collection;

    let databaseUrl: string = "mongodb+srv://RonjaS:gis123@gis-ist-geil.rwghv.mongodb.net/Eisdiele?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb://localhost: 27017";

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    connectToDatabase(databaseUrl);

    //Server und Listener erstellen
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        bestellungenList = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database connection ", bestellungenList != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    //Server Daten erhalten 
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

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


}