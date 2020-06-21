namespace Aufgabe08 {

    let formData: FormData;
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("button"));
    newButton.addEventListener("click", handleButton);
    
    //Die Formulardaten werden an den URL gehängt
    async function addToURL(): Promise<string> {
        formData = new FormData(document.forms[0]);
        //let url: string = "https://gissoserosl.herokuapp.com/";
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function handleButton(): Promise<void> {
        getResponse(await addToURL());
    }

    //Die Antwort wird vom Server geholt
    async function getResponse(_url: RequestInfo): Promise<void> {
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.text();
        console.log(response2);
        console.log("test123");
    }
}