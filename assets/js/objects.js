/*let me = {
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
*/


//OPDRACHT 1
lapRounds = {
    "round_1": 55.99,
    "round_2": 63.00,
    "round_3": 63.01,
    "round_4": 54.01,
    "round_5": 62.79,
    "round_6": 52.88,
    "round_7": 53.10,
    "round_8": 54.12,
}
console.log(lapRounds)

//OPDRACHT 2 & 3


const teachers = [
    {
        name: "loek",
        profession: "teacher",
        brand: "linux",
        hoursperWeek: 48,
        salary: 960,
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino",
        hoursperWeek: 50,
        salary: 1000,
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
        hoursperWeek: 36,
        salary:720,
    },
]


teachers.forEach(element => {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand}. This ${element.profession} works ${element.hoursperWeek} hours per week and earns ${element.salary}. this is an avarage of ${element.salary/element.hoursperWeek} euros per hour`)
});
    

