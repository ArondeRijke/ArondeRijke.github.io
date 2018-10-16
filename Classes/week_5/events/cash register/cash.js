

let button = document.getElementById("button");
let table = document.getElementById("tbody");
let totalPrice = document.getElementById("totalPrice");
let totalPriceValue = 0


button.addEventListener("click", function (event) {
    event.preventDefault();

    let productName = document.getElementById("productName").value
    let productPrice = document.getElementById("productPrice").value

    let totalPriceValue = parseFloat(productPrice)
    totalPriceValue += productPrice

    let tableRow = document.createElement("tr");
    let tableDataName = document.createElement("td");
    let tableDataPrice = document.createElement("td");
    let tableDataRemove = document.createElement("td");

    tableDataName.innerHTML = productName;
    tableDataPrice.innerHTML = productPrice;
    tableDataRemove.innerHTML = '<a href="#">verwijder</a>';

    tableDataRemove.addEventListener("click", deleteRow)

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataPrice);
    tableRow.appendChild(tableDataRemove);


    table.appendChild(tableRow);
})

function deleteRow(event) {
    let tr = event.target.parentNode.parentNode
    table.removeChild(tr)
}
