function replaceMainDivWithNewText(info) {
    document.getElementById("mainDiv").innerHTML=info;
}

function getResourceFile(myCallback) {
    let request=new XMLHttpRequest();
    request.open('GET',"resources.html");
    request.onload= function() {
        if(request.status==200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error: " + request.status);
        }
    }
    request.send();
}
//


function clickedButton() {
    getResourceFile(replaceMainDivWithNewText);
}

let button=document.getElementById("button");

button.addEventListener("click", clickedButton);