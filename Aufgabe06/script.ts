namespace Aufgabe06 {

    for (let i: number = 0; i < data.length; i++) {
        //Div-Elemente erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.classList.add("product");
        //Element
        document.getElementById("grid1")?.appendChild(newDiv);
        //Bild
        let productImg: HTMLImageElement = document.createElement("img");
        productImg.src = data[i].img;
        productImg.alt = data[i].name;
        productImg.classList.add("product-img");
        newDiv.appendChild(productImg);
        //Name
        let name: HTMLHeadingElement = document.createElement("h1");
        name.innerText = data[i].name;
        name.classList.add("product-name");
        newDiv.appendChild(name);
        //Beschreibung
        let describtion: HTMLSpanElement = document.createElement("p");
        describtion.innerText = data[i].description;
        describtion.classList.add("product-desc");
        newDiv.appendChild(describtion);
        //Farbe
        let colour: HTMLSpanElement = document.createElement("p");
        colour.innerText = data[i].colour;
        colour.classList.add("product-desc");
        newDiv.appendChild(colour);
        //Preis
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = data[i].price + "€";
        newDiv.appendChild(price);
        //button
        let setButton: HTMLButtonElement = document.createElement("button");
        setButton.innerHTML = "buy";
        setButton.setAttribute("id", "button" + i);
        newDiv.appendChild(setButton);
        //setButton.addEventListener("click", counterbutton);

        document.getElementById(data[i].category + ("grid"))?.appendChild(newDiv);
    }

    //Click Eigenschaft
    //let counterbeginn: number = 0;
   // let warenkorb: HTMLParagraphElement = document.createElement("p");
   // warenkorb.innerHTML = "hallo";

   // function counterbutton(_event: Event): void {
   //     counterbeginn++;
   //     warenkorb.innerHTML = "" + counterbeginn;
    //    newDiv.appendChild(setButton);

   // }

}
//# sourceMappingURL=tsInterface.js.map