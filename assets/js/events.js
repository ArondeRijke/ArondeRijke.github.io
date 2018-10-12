/*window.addEventListener("load", init, initSubmit)

function init(){
    const button= document.getElementById("container");
    button.addEventListener("click", clickEventHandler);
}

function initSubmit(){
    const submitbutton= document.getElementById("submit");
    submitbutton.addEventListener("click", clickEventHandler);
    const inputText = document.getElementById("inputText").value;
    console.log(inputText);
    event.preventDefault();
}



function clickEventHandler(event) {
    console.log(event);
    event.preventDefault();
}
*/
window.addEventListener("load", init)

function init(){
    const button= document.getElementById("container");
    button.addEventListener("click", clickEventHandler);
}

const clickAmount = document.createElement("p");
let totalClicks= 0;

function clickEventHandler(event) {
    totalClicks += 1;
    event.preventDefault();
    clickAmount.innerHTML = `You've clicked ${totalClicks} Aries.`;
    fallingImage();
}

function fallingImage(){

}

const faller = 

clickAmount.innerHTML = `You've clicked ${totalClicks} Aries.`;
document.body.appendChild(clickAmount);
