namespace Aufgabe06 {

    export interface Artikel {
        img: string;
        name: string;
        description: string;
        colour: string;
        price: number;
        category: string;
    }
    export let data: Artikel[] = [
        {
            img: "Produkte/bh.jpg",
            name: "Under Armour",
            description: "INFINITY MID BRA - Sport BH",
            colour: "black/white",
            price: 44.95,
            category: "clothes"
        },
        {
            img: "Produkte/hose.jpg",
            name: "Nike Performance",
            description: "Tights",
            colour: "black/white",
            price: 39.95,
            category: "clothes"
        },
        {
            img: "Produkte/hose2.jpg",
            name: "Even&Odd active",
            description: "Tights",
            colour: "dark red/pink",
            price: 26.99,
            category: "clothes"
        },
        {
            img: "Produkte/hoody.jpg",
            name: "Under Armour",
            description: "RIVAL FLEECE COLOR BLOCK HOODIE - Kapuzenpullover",
            colour: "dash pink/black/french gray",
            price: 49.95,
            category: "clothes"
        },
        {
            img: "Produkte/schuh.jpg",
            name: "Puma",
            description: "ZONE XT METAL - Trainings-/Fitnessschuh",
            colour: "black/gold",
            price: 79.95,
            category: "clothes"
        },
        {
            img: "Produkte/top.jpg",
            name: "Womans Best",
            description: "TRUE TIE CROP TOP",
            colour: "White",
            price: 29.00,
            category: "clothes"
        },
        {
            img: "Produkte/tasche.jpg",
            name: "Under Armour",
            description: "ESSENTIALS DUFFEL - Sporttasche",
            colour: "dash pink/black",
            price: 69.95,
            category: "clothes"
        },
        {
            img: "Produkte/handschuhe.jpg",
            name: "Nike Performance<",
            description: "WOMEN'S GYM ESSENTIAL FITNESS GLOVES - Kurzfingerhandschuh",
            colour: "black/white",
            price: 19.95,
            category: "clothes"
        },
        {
            img: "Produkte/tuch.jpg",
            name: "Nike performance",
            description: "PRO HIJAB - Mütze",
            colour: "black/white",
            price: 34.95,
            category: "clothes"
        },
        {
            img: "Produkte/kappe.jpg",
            name: "Champion",
            description: "LEGACY - Cap",
            colour: "light pink",
            price: 14.95,
            category: "clothes"
        },
        {
            img: "Produkte/kh.jpg",
            name: "Nike Performance",
            description: "W NP SHRT 3IN - kurze Sporthose",
            colour: "black/white",
            price: 24.95,
            category: "clothes"
        },
        {
            img: "Produkte/top2.jpg",
            name: "Nike Perfomance",
            description: "DRY VICTORY ELASTIKA TANK - Funktionsshirt",
            colour: "white/black",
            price: 24.95,
            category: "clothes"
        },
        {
            img: "Produkte/vitamins.jpg",
            name: "ESN Vitamin Stack",
            description: "120 Kapseln – Hochwertiger Multivitamin Komplex – Optimale Dosierung - 120 Portionen – Made in Germany",
            colour: "",
            price: 13.90,
            category: "Nutrition"
        },
        {
            img: "Produkte/creatin.jpg",
            name: "ESN Ultrapure Creatine Monohydrate",
            description: "500 g – 166 Portionen - hochwertiges ultrafeines Creatine Monohydrate - vegan – Made in Germany",
            colour: "",
            price: 12.90,
            category: "Nutrition"
        },
        {
            img: "Produkte/isowhey.jpg",
            name: "ESN Iso Whey Hardcore",
            description: "1000g – Chocolate – Erstklassiges Proteinpulver reich an essentiellen Aminosäuren (EAAs) und BCAAs – Sehr gut löslich – 33 Portionen – Made in Germany",
            colour: "",
            price: 23.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/carnitin.jpg",
            name: "L- CARNITIN Kapseln hochdosiert 3000 L Carnitin",
            description: "Extrem Beliebt bei Sportlern- Laborgeprüft vegan und ohne Zusätze 100 Kapseln Made in Germany",
            colour: "",
            price: 16.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/collagen.jpg",
            name: "Kollagen Pulver aus Weidehaltung Hydrolysat Protein",
            description: "wasserlöslich geschmacksneutral 500g inkl. Messlöffel",
            colour: "",
            price: 16.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/bcaa.jpg",
            name: "BCAA 8:1:1 Pulver",
            description: "Low Carb ohne Dextrose, Vegan, Made in Germany - FSA Nutrition - 300 g - Wassermelone",
            colour: "",
            price: 20.90,
            category: "Nutrition"
        },
        {
            img: "Produkte/pb.jpg",
            name: "BBGenics - Pillenbox",
            description: "Pillendose - Aufbewahrung mit 5 Fächern",
            colour: "",
            price: 4.83,
            category: "Nutrition"
        },
        {
            img: "Produkte/whey.jpg",
            name: "ESN Designer Whey Protein",
            description: "1000g – Vanilla – Eiweißpulver reich an essentiellen Aminosäuren (EAAs) – Sehr gut löslich – 33 Portionen – Made in Germany",
            colour: "",
            price: 20.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/iso.jpg",
            name: "Iso Drink Pulver von Dextro Energy",
            description: "Citrus Fresh - 440g Isotonisches Getränkepulver Zitrone - Für 11 Isotonische Getränke mit Elektrolyte",
            colour: "",
            price: 6.32,
            category: "Nutrition"
        },
        {
            img: "Produkte/d3.jpg",
            name: "NATURE LOVE® Vitamin D3",
            description: "Mehrfacher Sieger 2020* - Laborgeprüfte 5000 I.E. pro Tropfen - Premium: sehr hohe Stabilität. Flüssig in Tropfen (50ml). Hochdosiert, hergestellt in Deutschland",
            colour: "",
            price: 14.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/creatinm.jpg",
            name: "ESN Creapure® Creatine Monohydrate",
            description: "500g – 166 Portionen - hochwertiges reines Creatine Monohydrate – Vegan – Made in Germany",
            colour: "",
            price: 16.99,
            category: "Nutrition"
        },
        {
            img: "Produkte/coffein.jpg",
            name: "Koffein Kapseln hochdosiert 200mg",
            description: "100 Kapseln - Qualität aus Deutschland - ohne unnötige Zusatzstoffe - reines Coffeine",
            colour: "",
            price: 9.97,
            category: "Nutrition"
        }
    ];
}