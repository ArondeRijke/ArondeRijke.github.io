const productList = [
    'tandenborstel', 'deodorant', 'bakmeel', 'wortels', 'tandpasta',
    'krop sla', 'maggi', 'croky chips', 'wc papier', 'shampoo',
];

//productList.push ('keukenrol');
//productList.pop();

//console.table (productList);

for (let i = 0; i < productList.length; i++) {
    const element = productList[i];
    console.log(element);
    console.log(i);
}


//3 map function

/*for (let i = 0; i < productList.length; i++) {
    const element = productList[i];
    
}
*/

//opdrachtjes

/*const productPrices = [
    2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10
]

let totaal = 0;
for (let i = 0; i < productPrices.length; i++) {
    totaal = totaal + productPrices[i]
}
console.log(totaal);

function avarage() {
    let gemiddelde = Math.floor((totaal / productPrices.length) * 100) / 100;
    console.log(`de gemiddelde prijs is ${gemiddelde}`)
}
avarage();
*/

//OPDRACHT 1
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function randomRound() {
    const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    const round = [Math.floor(Math.random() * lapRounds.length)];
    console.log(lapRounds[round])
}

randomRound();

//OPDRACHT 2
const allMyRecords = [

    ["The Who - Pinball Wizard",
        "Rolling Stones - Exile on main street",
        "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed",
        "Het Goede Doel - Belgie",
        "Doe Maar - skunk"]
];

function trackList() {
    const allMyRecords = [

        ["The Who - Pinball Wizard",
            "Rolling Stones - Exile on main street",
            "Police - Message in a bottle"],
        ["De Dijk - Alle 40 Goed",
            "Het Goede Doel - Belgie",
            "Doe Maar - skunk"]
    ];

    allMyRecords.forEach(elem => {
        elem.forEach(elem => {
            console.log(elem)
        });
    });
}
trackList();

//OPDRACHT 3
/*function filteredLapRoundsWithForLoop() {

    let newArray = [];

    for (let i = 0; i < lapRounds.length; i++) {



        if (lapRounds[i] < 4) {

            newArray.push(lapRounds[i]);

        }

    }

    return newArray;

} 
*/

const lapFilter = lapRounds.filter(function(lapRounds){
    return lapRounds < 4;
});
console.log(lapFilter)