// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function myFunction() {
    document.getElementById('Text1').value = "Text has been changed";
}

function myCopyFunc() {
    let x = document.getElementById('Text2').value;
    document.getElementById('Text3').value = x;
}

//Date stuff
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

//Random Num
function getRndInteger() {
    let MinVal = document.getElementById('MinV').value;
    let MaxVal = document.getElementById('MaxV').value;
    return Math.floor(Math.random() * (MaxVal - MinVal + 1)) + MinVal;
}

