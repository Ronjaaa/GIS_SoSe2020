import * as Http from "http";

namespace Aufgabe08 {
    //Ausgabe Serverstart
    console.log("Server wird gestartet");
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

    //Konsolenausgabe
    function handleListen(): void {
        console.log("Ich höre dich");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Konsolenausgabe
        console.log("Ich höre dich immer noch");
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