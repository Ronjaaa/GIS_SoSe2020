import * as Http from "http";

namespace Aufgabe08 {
    //Ausgabe Serverstart
    console.log("Starting server");
    //port Vairable erstellen und port zuweisen
    let port: number = Number(process.env.PORT);
    //port überprüfen und gegebenfalls setzen
    if (!port)
        port = 8100;

    //Server variable erstellen
    let server: Http.Server = Http.createServer();
    //handler hinzufügen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf port hören und schauen ob es dort anfragen gibt.
    server.listen(port);

    //Konsolen Ausgabe
    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Konsolen ausgabe
        console.log("I hear voices!");
        //Parameter des Headers der Response festlegen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe der url
        _response.write(_request.url);
        console.log(_request.url);
        //response abschließen
        _response.end();
    }
}