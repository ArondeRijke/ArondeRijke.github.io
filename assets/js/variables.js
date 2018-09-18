//OPDRACHT 1//
const waarde = (-4);
let remainder = (waarde % 2);
/*hier word de remainder uitgerekend waar gedeeld wordt door 2,
 hieruit kan dus alleen 0 of 1 (-0,-1) zijn*/

 console.log (`jouw waarde (${waarde}) is:`)
/* hier wordt de tekst en de waarde weergegeven */

if (remainder == 0|| remainder == -0) {
    console.log("even");
} else {
    console.log( "oneven");
}

/* hier wordt bepaald of de ingeoverde waarde even of oneven is.
wanneer de remainder 1 of -1 is, is het getal oneven, wanneer
deze 0/-0 is, is het getal even */

//OPDRACHT 2//
const message = ("programming is not so cool");
console.log (message)

const messageReplacedNot = message.replace (' not', '')
console.log (messageReplacedNot)

/* in de replacer zoekt hij in de originele message " not" 
op en deze replaced hij met niks */

//OPDRACHT 3//

const getal = (1400);
const statement = ("Ik woon op Naboo")

console.log (getal == statement)

/* Bij deze vergelijking, is de output "false", omdat je 
een getal niet met een nummer kan vergelijken. De statement is
een string, het getal niet.*/
