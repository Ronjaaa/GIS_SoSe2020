namespace Aufgabe08 {

    let formData: FormData;
    let newButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("button"));
    newButton.addEventListener("click", handleButton);
    
    //Die Formulardaten werden an den URL gehängt
    async function addToURL(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
    //Die Antwort wird vom Server geholt
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.text();
        console.log(response2);
        console.log("test123");
    }

    function handleButton(_event: Event): void {
        addToURL("https://gissoserosl.herokuapp.com/");
        //addToURL("http://localhost:8100");
    }

    
    
       
    }
