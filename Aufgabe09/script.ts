namespace Aufgabe09 {

    let formData: FormData;
    let newButton1: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("buttonhtml"));
    newButton1.addEventListener("click", handleHtml);
    let newButton2: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("buttonjson"));
    newButton2.addEventListener("click", handleJson);
    let _url: string;

    //Die Formulardaten werden an den URL gehängt - HTML
    async function handleHtml(): Promise<void> {
        formData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlErstellen();
        _url = _url + "/html" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.text();
        let ausgabe: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("htmlAusgabe"));
        ausgabe.innerHTML = response2;
        console.log(response2);
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }

    async function handleJson(): Promise<void> {
        formData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlErstellen();
        _url = _url + "/json" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.text(); //oder .json
        console.log(response2);
        console.log("test123");
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }

    function urlErstellen(): void {
        _url = "https://gissoserosl.herokuapp.com";
        //_url = "http://localhost:8100";
    }
}
