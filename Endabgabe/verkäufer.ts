namespace Endabgabe {
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("bestellungAnzeigen"));
    newButton.addEventListener("click", handleNewButton);
    let text: HTMLElement = <HTMLElement>document.getElementById("bestellungen");
    let formData: FormData;


    async function handleNewButton(): Promise<void> {
        console.log("Listening");
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gissoserosl.herokuapp.com";
        url = url + "/holen" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responsestring: string = await response.text();
        text.innerHTML = responsestring;

    }

    //Bestellung löschen
    let löschButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("bestellungLöschen"));
    löschButton.addEventListener("click", handleLöschButton);

    let url: string; 

    async function handleLöschButton(): Promise<void> {

        // tslint:disable-next-line: no-any
        urlErstellen();
        formData = new FormData(document.forms[0]);

        url = url + "/loeschen" + "?";

        console.log(url);
        await fetch(url);
        console.log("test123");
        urlErstellen();
    } 
   
    function urlErstellen(): void { 
        url = "https://gissoserosl.herokuapp.com";
        //url = "http://localhost:8100";
    }



}