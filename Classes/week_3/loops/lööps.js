/*
for (let getal = 0; getal <= 10; getal++) {
console.log(getal)   
}

for (let getal = 0; getal <= 25; getal++) {   
let remainder = (getal % 3);
if (remainder == 0 || remainder ==-0)
    console.log(`dit getal: ${getal} is deelbaar door 3`);
else
    console.log(`dit getal: ${getal} is niet deelbaar door 3`);
}
*/

//OPDRACHT 1
let getal = 0;

while (getal <= 24) {
    getal++
    let remainder = (getal % 4);
    if (remainder == 0 || remainder == -0)
        console.log(`dit getal: ${getal} is deelbaar door 4`);
    else
        console.log(`dit getal: ${getal} is niet deelbaar door 4`);
}


//OPDRACHT 2

let f0 = 0;
let f1 = 1;
let fn = 0;

while (f0 < 55) {
    console.log(f1);
    fn = f0 + f1;
    f0 = f1
    f1 = fn
}

//OPDRACHT 3
let reeks = [
    2, 4, 8, 9, 12, 13
];

let result = 0;

for (let i = 0; i < reeks.length; i++) {
    result = result + reeks[i];
    console.log(result);
}