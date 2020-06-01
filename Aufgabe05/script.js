"use strict";
//Clothes
let artikel1 = {
    img: "Produkte/bh.jpg",
    name: "Under Armour",
    description: "INFINITY MID BRA - Sport BH",
    colour: "black/white",
    price: "44,95€"
};
let artikel2 = {
    img: "Produkte/hose.jpg",
    name: "Nike Performance",
    description: "Tights",
    colour: "black/white",
    price: "39,95€"
};
let artikel3 = {
    img: "Produkte/hose2.jpg",
    name: "Even&Odd active",
    description: "Tights",
    colour: "dark red/pink",
    price: "26,99€"
};
let artikel4 = {
    img: "Produkte/hoody.jpg",
    name: "Under Armour",
    description: "RIVAL FLEECE COLOR BLOCK HOODIE - Kapuzenpullover",
    colour: "dash pink/black/french gray",
    price: "49,95€"
};
let artikel5 = {
    img: "Produkte/schuh.jpg",
    name: "Puma",
    description: "ZONE XT METAL - Trainings-/Fitnessschuh",
    colour: "black/gold",
    price: "79,95€"
};
let artikel6 = {
    img: "Produkte/top.jpg",
    name: "Womans Best",
    description: "TRUE TIE CROP TOP",
    colour: "White",
    price: "29,00€"
};
let artikel7 = {
    img: "Produkte/tasche.jpg",
    name: "Under Armour",
    description: "ESSENTIALS DUFFEL - Sporttasche",
    colour: "dash pink/black",
    price: "69,95€"
};
let artikel8 = {
    img: "Produkte/handschuhe.jpg",
    name: "Nike Performance<",
    description: "WOMEN'S GYM ESSENTIAL FITNESS GLOVES - Kurzfingerhandschuh",
    colour: "black/white",
    price: "19,95€"
};
let artikel9 = {
    img: "Produkte/tuch.jpg",
    name: "Nike performance",
    description: "PRO HIJAB - Mütze",
    colour: "black/white",
    price: "34,95€"
};
let artikel10 = {
    img: "Produkte/kappe.jpg",
    name: "Champion",
    description: "LEGACY - Cap",
    colour: "light pink",
    price: "14,95€"
};
let artikel11 = {
    img: "Produkte/kh.jpg",
    name: "Nike Performance",
    description: "W NP SHRT 3IN - kurze Sporthose",
    colour: "black/white",
    price: "24,95€"
};
let artikel12 = {
    img: "Produkte/top2.jpg",
    name: "Nike Perfomance",
    description: "DRY VICTORY ELASTIKA TANK - Funktionsshirt",
    colour: "white/black",
    price: "24,95€"
};
//Nutrition
let artikel13 = {
    img: "Produkte/vitamins.jpg",
    name: "ESN Vitamin Stack",
    description: "120 Kapseln – Hochwertiger Multivitamin Komplex – Optimale Dosierung - 120 Portionen – Made in Germany",
    colour: "white/black",
    price: "13,90€"
};
let artikel14 = {
    img: "Produkte/creatin.jpg",
    name: "ESN Ultrapure Creatine Monohydrate",
    description: "500 g – 166 Portionen - hochwertiges ultrafeines Creatine Monohydrate - vegan – Made in Germany",
    price: "12,90€"
};
let artikel15 = {
    img: "Produkte/isowhey.jpg",
    name: "ESN Iso Whey Hardcore",
    description: "1000g – Chocolate – Erstklassiges Proteinpulver reich an essentiellen Aminosäuren (EAAs) und BCAAs – Sehr gut löslich – 33 Portionen – Made in Germany",
    price: "23,99€"
};
let artikel16 = {
    img: "Produkte/carnitin.jpg",
    name: "L- CARNITIN Kapseln hochdosiert 3000 L Carnitin",
    description: "Extrem Beliebt bei Sportlern- Laborgeprüft vegan und ohne Zusätze 100 Kapseln Made in Germany",
    price: "16,99€"
};
let artikel17 = {
    img: "Produkte/collagen.jpg",
    name: "Kollagen Pulver aus Weidehaltung Hydrolysat Protein",
    description: "wasserlöslich geschmacksneutral 500g inkl. Messlöffel",
    price: "16,99€"
};
let artikel18 = {
    img: "Produkte/bcaa.jpg",
    name: "BCAA 8:1:1 Pulver",
    description: "Low Carb ohne Dextrose, Vegan, Made in Germany - FSA Nutrition - 300 g - Wassermelone",
    price: "20,90€€"
};
let artikel19 = {
    img: "Produkte/pb.jpg",
    name: "BBGenics - Pillenbox",
    description: "Pillendose - Aufbewahrung mit 5 Fächern",
    price: "4,83€"
};
let artikel20 = {
    img: "Produkte/whey.jpg",
    name: "ESN Designer Whey Protein",
    description: "1000g – Vanilla – Eiweißpulver reich an essentiellen Aminosäuren (EAAs) – Sehr gut löslich – 33 Portionen – Made in Germany",
    price: "20,99€"
};
let artikel21 = {
    img: "Produkte/iso.jpg",
    name: "Iso Drink Pulver von Dextro Energy",
    description: "Citrus Fresh - 440g Isotonisches Getränkepulver Zitrone - Für 11 Isotonische Getränke mit Elektrolyte",
    price: "6,32€"
};
let artikel22 = {
    img: "Produkte/d3.jpg",
    name: "NATURE LOVE® Vitamin D3",
    description: "Mehrfacher Sieger 2020* - Laborgeprüfte 5000 I.E. pro Tropfen - Premium: sehr hohe Stabilität. Flüssig in Tropfen (50ml). Hochdosiert, hergestellt in Deutschland",
    price: "14,99€"
};
let artikel23 = {
    img: "Produkte/creatinm.jpg",
    name: "ESN Creapure® Creatine Monohydrate",
    description: "500g – 166 Portionen - hochwertiges reines Creatine Monohydrate – Vegan – Made in Germany",
    price: "16,99€"
};
let artikel24 = {
    img: "Produkte/coffein.jpg",
    name: "Koffein Kapseln hochdosiert 200mg",
    description: "100 Kapseln - Qualität aus Deutschland - ohne unnötige Zusatzstoffe - reines Coffeine",
    price: "9,97€"
};
//Artikel in Array
let clothes = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9,
    artikel10, artikel11, artikel12];
//Clothes
for (let i = 0; i < clothes.length; i++) {
    //Div-Elemente erstellen
    let newDiv = document.createElement("div");
    //ID zuweisen zu Div
    newDiv.id = "div1" + i;
    //Element
    document.getElementById("grid1")?.appendChild(newDiv);
    //Bild
    let newPicture = document.createElement("img");
    newPicture.src = clothes[i].img;
    document.getElementById("div1" + i)?.appendChild(newPicture);
    //Name
    let name = document.createElement("h1");
    name.innerHTML = clothes[i].name;
    document.getElementById("div1" + i)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = clothes[i].description;
    document.getElementById("div1" + i)?.appendChild(description);
    //Farbe
    let colour = document.createElement("p");
    colour.innerHTML = clothes[i].colour;
    document.getElementById("div1" + i)?.appendChild(colour);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = clothes[i].price;
    document.getElementById("div1" + i)?.appendChild(price);
    //button
    let button = document.createElement("button");
    button.setAttribute("value", "buy");
    document.getElementById("clothes" + i)?.appendChild(button);
}
//Artikel in Array
let nutrition = [artikel13, artikel14, artikel15, artikel16, artikel17, artikel18, artikel19, artikel20, artikel21,
    artikel22, artikel23, artikel24];
//Nutrition
for (let i = 0; i < nutrition.length; i++) {
    //Div-Elemente erstellen
    let newDiv = document.createElement("div");
    //ID zuweisen zu Div
    newDiv.id = "div2" + i;
    //Element
    document.getElementById("grid2")?.appendChild(newDiv);
    //Bild
    let newPicture = document.createElement("img");
    newPicture.src = nutrition[i].img;
    document.getElementById("div2" + i)?.appendChild(newPicture);
    //NAME 
    let name = document.createElement("h1");
    name.innerHTML = nutrition[i].name;
    document.getElementById("div2" + i)?.appendChild(name);
    //BESCHREIBUNG
    let description = document.createElement("p");
    description.innerHTML = nutrition[i].description;
    document.getElementById("div2" + i)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = nutrition[i].price;
    document.getElementById("div2" + i)?.appendChild(price);
    //BUTTON
    let button = document.createElement("submit");
    button.innerHTML = "buy";
    document.getElementById("nutrition" + i)?.appendChild(button);
}
//# sourceMappingURL=script.js.map