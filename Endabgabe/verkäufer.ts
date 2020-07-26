namespace Endabgabe {
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("bestellungenAnzeigen"));
    newButton.addEventListener("click", handleNewButton);
    let text: HTMLElement = <HTMLElement>document.getElementById("bestellungen");
    let formData: FormData;
    
    async function handleNewButton(): Promise<void> {
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gissoserosl.herokuapp.com";
        url = url + "/holen" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responsestring: string = await response.text();
        text.innerHTML = responsestring;

    }

}