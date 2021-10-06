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
//n = new Date();
//y = n.getFullYear();
//m = n.getMonth() + 1;
//d = n.getDate();
//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
if (m <= 9)
    m = '0' + m;
d = n.getDate();
if (d <= 9)
    d = '0' + d;
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

//Random Num
function getRndInteger() {
    let MinVal = document.getElementById('MinV').value;
    let MaxVal = document.getElementById('MaxV').value;
    return Math.floor(Math.random() * (MaxVal - MinVal + 1)) + MinVal;
}

//GRAPH STUFF

//set myChart to undefined
//let myChart = undefined;

//function graphGraph() {
//        //set values from textbox inputs
//        let R = document.getElementById("RedVal").value;
//        let B = document.getElementById("BlueVal").value;
//        let Y = document.getElementById("YellowVal").value;
//        let G = document.getElementById("GreenVal").value;
//        let P = document.getElementById("PurpleVal").value;
//        let O = document.getElementById("OrangeVal").value;

//        //If undefined (first use) then build the chart
//        if (Chart.getChart(myChart) === undefined) {
//            let ctx = document.getElementById('myChart').getContext('2d');
//            myChart = new Chart(ctx, {
//                type: 'bar',
//                data: {
//                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                    datasets: [{
//                        label: '# of Votes',
//                        //data: [12, 19, 3, 5, 2, 3],
//                        data: [R, B, Y, G, P, O],
//                        backgroundColor: [
//                            'rgba(255, 99, 132, 0.2)',
//                            'rgba(54, 162, 235, 0.2)',
//                            'rgba(255, 206, 86, 0.2)',
//                            'rgba(75, 192, 192, 0.2)',
//                            'rgba(153, 102, 255, 0.2)',
//                            'rgba(255, 159, 64, 0.2)'
//                        ],
//                        borderColor: [
//                            'rgba(255, 99, 132, 1)',
//                            'rgba(54, 162, 235, 1)',
//                            'rgba(255, 206, 86, 1)',
//                            'rgba(75, 192, 192, 1)',
//                            'rgba(153, 102, 255, 1)',
//                            'rgba(255, 159, 64, 1)'
//                        ],
//                        borderWidth: 1
//                    }]
//                },
//                options: {
//                    scales: {
//                        y: {
//                            beginAtZero: true
//                        }
//                    }
//                }
//            });
//        //if its not "undefined" (aka, the canvas is already populated) then "update" the chart as follows 
//        } else {
//            myChart.data.datasets[0].data = [R, B, Y, G, P, O];
//            myChart.update();
//        }
//    }













//BITCOIN API
var apiUrl = 'https://api.coinbase.com/v2/prices/BTC-GBP/sell';
let amountbtc;

var intervalId = window.setInterval(function () {
        fetch(apiUrl).then(response => {
            return response.json();
        }).then(JSONResponseObject => {
            // Work with JSON data here
            document.getElementById('BTC_box').value = JSONResponseObject.data.amount;
        });
}, 5000);







//CRYPTO GRAPH
let myChart = undefined;

function graphGraph() {
    //set values from textbox inputs
    let a = 10;
    let b = 12;
    let c = 5;
    let d = 4;
    let e = 12;
    let f = 18;
    let g = 1;
    let h = 1;
    let i = 5;
    var j = 22;
    
    //If undefined (first use) then build the chart
    if (Chart.getChart(myChart) === undefined) {
        let ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                //labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
                labels: ['','','','','','','','','',''],
                datasets: [{
                    label: 'My First Dataset',
                    data: [a, b, c, d, e, f, g, h, i, j],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.2
                }]
            },
        });
        //if its not "undefined" (aka, the canvas is already populated) then "update" the chart as follows 
    } else {
        myChart.data.datasets[0].data = [a, b, c, d, e, f, g, h, i, j];
        myChart.update();
    }
}

////CRYPTO GRAPH
//let myChart = undefined;

//function graphGraph() {
//    //set values from textbox inputs
//    let R = document.getElementById("RedVal").value;
//    let B = document.getElementById("BlueVal").value;
//    let Y = document.getElementById("YellowVal").value;
//    let G = document.getElementById("GreenVal").value;
//    let P = document.getElementById("PurpleVal").value;
//    let O = document.getElementById("OrangeVal").value;

//    //If undefined (first use) then build the chart
//    if (Chart.getChart(myChart) === undefined) {
//        let ctx = document.getElementById('myChart').getContext('2d');
//        myChart = new Chart(ctx, {
//            type: 'line',
//            data: {
//                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                datasets: [{
//                    label: '# of Votes',
//                    //data: [12, 19, 3, 5, 2, 3],
//                    data: [R, B, Y, G, P, O],
//                    backgroundColor: [
//                        'rgba(255, 99, 132, 0.2)',
//                        'rgba(54, 162, 235, 0.2)',
//                        'rgba(255, 206, 86, 0.2)',
//                        'rgba(75, 192, 192, 0.2)',
//                        'rgba(153, 102, 255, 0.2)',
//                        'rgba(255, 159, 64, 0.2)'
//                    ],
//                    borderColor: [
//                        'rgba(255, 99, 132, 1)',
//                        'rgba(54, 162, 235, 1)',
//                        'rgba(255, 206, 86, 1)',
//                        'rgba(75, 192, 192, 1)',
//                        'rgba(153, 102, 255, 1)',
//                        'rgba(255, 159, 64, 1)'
//                    ],
//                    borderWidth: 1
//                }]
//            },
//            options: {
//                scales: {
//                    y: {
//                        beginAtZero: true
//                    }
//                }
//            }
//        });
//        //if its not "undefined" (aka, the canvas is already populated) then "update" the chart as follows 
//    } else {
//        myChart.data.datasets[0].data = [R, B, Y, G, P, O];
//        myChart.update();
//    }
//}