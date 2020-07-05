import * as Http from "http";
import * as Url from "url";

namespace Aufgabe09 {
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
        if (_request.url) { //wenn request url existiert soll das augeführt werden
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //aus der url wird mit parse ein assoziatives array erstellt
            if (url.pathname == "/html") { //wenn url pfadnamen "/html" besitzt
                for (let key in url.query) { //schleife durchläuft alle eigenschaften des objekts
                    _response.write(key + ": " + url.query[key] + "<br>"); //server verschikt antwort, für jeden key wir der jeweilige wert im query ausgegeben 
                }
            }

            if (url.pathname == "/json") { // wenn url pfadname "/json" besitzt
                let jsonString: string = JSON.stringify(url.query); //er speichert den query wert als json string
                _response.write(jsonString); //server verschikt antwort als json-string
            }
        }
        console.log(_request.url);
        //response abschließen
        _response.end();
    }
}