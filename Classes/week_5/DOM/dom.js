/*const allListItems = document.getElementsByTagName("li");
console.log(allListItems);
const ul = document.getElementById("items");
console.log(ul)
const firstChild = ul.firstElementChild;
console.log(firstChild);
firstChild.classList.add("standout")
const ph = document.getElementById("items")
const newItem = document.createElement("li");
newItem.innerText = "krop sla";
ph.appendChild(newItem);

groceryList = [
{
    "item":"brood",
    "price": "0.65"
},
{
    "item":"kaas",
    "price": "3.70"  
},
{
    "item":"cola",
    "price": "2.00"  
},]

function Table(){
    const table = document.createElement("table");
   

    groceryList.forEach(element => {
        const tr = document.createElement ("tr");
        const tdName= document.createElement("td");
        tdName.innerText= element.item;
        const tdPrice= document.createElement("td");
        tdPrice.innerText = element.price;
        table.appendChild(tr);
    
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        table.appendChild(tr);
    
        const body = document.getElementById("body");
        body.appendChild(table);
    });
}

Table();
*/


//OPDRACHT 1
function averageGrades(){
    for (let i = 0; i < gradetable.children.length; i++) {
        const e = gradetable.children[i];
        let n = Number(e.children[1].innerHTML)
        total+=n;
    }
averageGrade = Math.round(total/gradetable.children.length*10)/10
}

let total= 0;
const gradetable = document.getElementById("gradeList");
let averageGrade;
averageGrades();
const newRow = document.createElement("tr");
const rowText = document.createElement("td");
const rowGrade = document.createElement("td");
rowText.innerText = "Gemiddelde";
rowGrade.innerText = averageGrade;
gradeList.appendChild(newRow);
newRow.appendChild(rowText);
newRow.appendChild(rowGrade);

//OPDRACHT 2

const courses = document.getElementById("course")
const Colours = ["white", "pink"]
console.log (courses)

function colours(){
    for (let i = 0; i < courses.children.length; i++) {
        const e = courses.children[i];
        e.style = `background-color: ${Colours[i%Colours.length]}`;
    }
}
colours();

//OPDRACHT 3

function createImageElement(source){
    let plaatje = document.createElement("img");
    plaatje.src = source;
document.body.appendChild(plaatje);
}

createImageElement("./assets/img/pasfoto.jpg")
