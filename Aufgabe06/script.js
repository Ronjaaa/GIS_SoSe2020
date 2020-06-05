"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.data.length; i++) {
        //Div-Elemente erstellen
        let newDiv = document.createElement("div");
        newDiv.classList.add("product");
        //Element
        document.getElementById("grid1")?.appendChild(newDiv);
        //Bild
        let productImg = document.createElement("img");
        productImg.src = Aufgabe06.data[i].img;
        productImg.alt = Aufgabe06.data[i].name;
        productImg.classList.add("product-img");
        newDiv.appendChild(productImg);
        //Name
        let name = document.createElement("h1");
        name.innerText = Aufgabe06.data[i].name;
        name.classList.add("product-name");
        newDiv.appendChild(name);
        //Beschreibung
        let describtion = document.createElement("p");
        describtion.innerText = Aufgabe06.data[i].description;
        describtion.classList.add("product-desc");
        newDiv.appendChild(describtion);
        //Farbe
        let colour = document.createElement("p");
        colour.innerText = Aufgabe06.data[i].colour;
        colour.classList.add("product-desc");
        newDiv.appendChild(colour);
        //Preis
        let price = document.createElement("p");
        price.innerHTML = Aufgabe06.data[i].price + "€";
        newDiv.appendChild(price);
        //button
        let setButton = document.createElement("button");
        setButton.innerHTML = "buy";
        setButton.setAttribute("id", "button" + i);
        newDiv.appendChild(setButton);
        //setButton.addEventListener("click", counterbutton);
        document.getElementById(Aufgabe06.data[i].category + ("grid"))?.appendChild(newDiv);
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
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=tsInterface.js.map
//# sourceMappingURL=script.js.map