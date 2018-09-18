//CONDITIONS!!!!

//OPDRACHT CONDITIONS

//deel 1
/*let cijfer = 54
const cijferText = (`jouw cijfer ${cijfer} is: `)

if (cijfer <= 54) {
    console.log(`${cijferText}onvoldoende`)
}

else if (cijfer >= 55 && cijfer <= 64) {
    console.log(`${cijferText}voldoende`)
}
else if (cijfer >= 65 && cijfer <= 84) {
    console.log(`${cijferText}goed`)
}
else if (cijfer >= 85) {
    console.log(`${cijferText}uitmuntend`)
}
*/
//deel 2
let cijfer = 89
const cijferText = (`jouw cijfer ${cijfer} is: `)

switch (true) {
    case cijfer <= 54:
        console.log(`${cijferText}onvoldoende`)
        break;
    case cijfer >= 55 && cijfer <= 64:
        console.log(`${cijferText}voldoende`)
        break;
    case cijfer >= 65 && cijfer <= 84:
        console.log(`${cijferText}goed`)
        break;
    case cijfer >= 85:
        console.log(`${cijferText}uitmuntend`)
        break;

    default:
        break;
}

//deel 3

const purchasedBook = "true";
const inTrain = "false"
const job = "garbage man"

if (purchasedBook == "true" && inTrain =="false" && job == "teacher")
    console.log ("Finally i can enjoy my book")
else if (purchasedBook == "true" && inTrain =="false" && job != "teacher")
    console.log ("I'm not a teacher, but i can still enjoy this book on the train.")

else if (purchasedBook == "false" && inTrain =="false" && job == "teacher")
    console.log ("I did not purchase this book, but i stole it so i can still enjoy it.")
else if (purchasedBook == "false" && inTrain =="false" && job != "teacher")
    console.log ("I did not purchase this book, but i stole it so i can still enjoy it. Also i'm not a teacher")

else if (purchasedBook == "true" && inTrain =="true" && job != "teacher")
    console.log ("I'm on the train, enjoying my book, but i'm not a teacher.")
else if (purchasedBook == "true" && inTrain =="true" && job == "teacher")
    console.log ("I'm on the train, enjoying my book, and i'm a teacher.")
else if (purchasedBook == "false" && inTrain =="false" && job == "teacher")
    console.log ("I did not purchase this book, i'm not on the train and i'm a teacher.")
else if (purchasedBook == "false" && inTrain =="false" && job != "teacher")
    console.log ("I did not purchase this book, i'm not on the train and i'm not a teacher.")
else {
    console.log ("je hebt wat verkeerd ingevuld.")
}
//EINDE OPDRACHT

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//LESSTOF
let currentAction = ("strings");

//STRINGS
const stringSentence = ("de gekozen action is: strings");

//CALCULATING
let waarde1 = 3;
let waarde2 = 9;
let calculation = (waarde1 * waarde2);
const calculationText = (`De gekozen action is: calculating. met de som: ${waarde1} x ${waarde2} en uitkomst: `);

//Booleans
let grade = 69

let output;
if (grade >= 55) {
    output = true
}
else {
    output = false
}

const booleansText = (`De gekozen action is: Booleans. Is jouw cijfer: ${cijfer} voldoende? Antwoord:${output}.`)

//selector
if (currentAction == "calculating") {
    console.log(`${calculationText}${calculation}`)
}

else if (currentAction == "strings") {
    console.log(stringSentence.toUpperCase())
    console.log('character at:', stringSentence.charAt(7))
    console.log('lengte van de string:', stringSentence.length)
    console.log('substring:', stringSentence.substring(3, 20))
}

else if (currentAction == "Booleans") {
    console.log(booleansText)
}

else {
    console.error(`${currentAction} is geen valide input dom joch`)
}

// einde opdracht

//BMI

let lengte = 1.81;
let gewicht = 75;
const BMI = Math.round((gewicht / (lengte * lengte)) * 10) / 10;
console.log(`BMI= ${BMI}`);

if (BMI < 18.5) {
    console.log("Classificatie: ondergewicht. Risico: laag (maar verhoogd risico op andere aandoeningen)");
}

else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Classificatie: normaal gewicht. Risico: gemiddeld");
}

else if (BMI >= 24.9 && BMI <= 29.9) {
    console.log("Classificatie: overgewicht. Risico: verhoogd");
}

else if (BMI >= 30 && BMI <= 49.9) {
    console.log("Classificatie: obesitas. Risico: groot risico");
}

else if (BMI >= 50) {
    console.log("Classificatie: jezus man, ga sporten");
}

