window.addEventListener("load", init, initSubmit)

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
