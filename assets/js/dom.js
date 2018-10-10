const allListItems = document.getElementsByTagName("li");
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