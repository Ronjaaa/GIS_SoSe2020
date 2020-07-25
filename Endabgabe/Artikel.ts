namespace Endabgabe {

    export interface Artikel {
        img: string;
        name: string;
        price: number;
        category: string;
    }
    export let data: Artikel[] = [];
    
    export async function ladeArtikelVonJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: String = await response.json();
        data = JSON.parse(JSON.stringify(respJSON));
        erstelleArtikel();
    }
}