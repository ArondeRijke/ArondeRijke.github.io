/* counter
let pigs = function (numberOfPigs) {
    let pigs = '';
    let counter = 0;
    while (counter <= numberOfPigs) {
        pigs += '🐷'
        counter++
    }
    pigs += 'Knor!';
    return pigs;
}

console.log(pigs(4));

//factorialize
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
factorialize(5);

console.log(factorialize(6));*/

//OPDRACHT 1
function Fibonacci() {
    let f0 = 0;
    let f1 = 1;
    let fn = 0;

    while (f0 < 55) {
        console.log(f1);
        fn = f0 + f1;
        f0 = f1
        f1 = fn
    }
}

//OPDRACHT 2
function countdown() {
    for (let getal = 10; getal > 0; getal--) {
        console.log(getal)
        if (getal == 1)
            console.log("Gelukkig nieuwjaar!")
    }
}
countdown()

//OPDRACHT 3

spinnen()
function spinnen() {
    let message = "purrr";
    console.log(message);

}

purrr()
let purrr = function () {
    let message = "purrr";
    console.log(message);
}

