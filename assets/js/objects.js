let me = {
    name : "Aron",
    age : 19,
    car: "Fiat Punto sporting",
    favvehicle: {
        name: "car",
        nrofwheels: 4,
    },
    names: ["Aron, Naomi, Lisa, Dennis, Brenda"],
    sentence: 'mijn favoriete vervoersmiddel is mijn auto en die heeft 4 wielen',
}

console.log(me)

//console.log(Me)
//Me.hobby= [1,2,3,4];

function opdrachtjes(){
    console.log(`mijn favoriete vervoersmiddel is ${me.favvehicle.name} en die heeft ${me.favvehicle.nrofwheels} wielen`);
me.names.forEach(element => {
    console.log(element)
});
}
opdrachtjes();