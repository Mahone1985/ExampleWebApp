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

//***********************************************
//GRAPH STUFF
//***********************************************
//set barChart to undefined
let barChart = undefined;

function barGraphExample() {
        //set values from textbox inputs
        let R = document.getElementById("RedVal").value;
        let B = document.getElementById("BlueVal").value;
        let Y = document.getElementById("YellowVal").value;
        let G = document.getElementById("GreenVal").value;
        let P = document.getElementById("PurpleVal").value;
        let O = document.getElementById("OrangeVal").value;

        //If undefined (first use) then build the chart
        if (Chart.getChart(barChart) === undefined) {
            let ctx = document.getElementById('barChart').getContext('2d');
            barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        //data: [12, 19, 3, 5, 2, 3],
                        data: [R, B, Y, G, P, O],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        //if its not "undefined" (aka, the canvas is already populated) then "update" the chart as follows 
        } else {
            barChart.data.datasets[0].data = [R, B, Y, G, P, O];
            barChart.update();
        }
    }



//***********************************************
//CRYPTO GRAPH TO OUTPUT ROLLING PRICE OF BTC/GBP
//***********************************************

//COINBASE API CALL
var apiUrl = 'https://api.coinbase.com/v2/prices/BTC-GBP/spot';
var amountbtc;

function update() {
    fetch(apiUrl).then(response => {
            return response.json();
        }).then(JSONResponseObject => {
            amountbtc = JSONResponseObject.data.amount;
            document.getElementById('BTC_box').value = amountbtc;
            graphGraph();
        });
}
//COINBASE API CALL for yesterday
var apiUrlYest = 'https://api.coinbase.com/v2/prices/BTC-GBP/spot?date=2021-10-11';
var amountbtcYest;

function update2() {
    fetch(apiUrlYest).then(response2 => {
        return response2.json();
    }).then(JSONResponseObject2 => {
        amountbtcYest = JSONResponseObject2.data.amount;
    });
}

//Call update straight away to pain canvas on page load and then call it as an interval
update();
update2();

setInterval(update, 20000); // 20000 = 20 seconds

//GRAPH THE OUTPUTS
let myChart = undefined;
let cnt = 0;
document.getElementById('cnt-box').value = cnt;
function graphGraph() {

    //If undefined (first use) then build the chart
    if (Chart.getChart(myChart) === undefined) {
        let ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [''],
                datasets: [{
                    label: 'My First Dataset',
                    data: [amountbtc],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.2
                }]
            },
        });
        //if its not "undefined" (aka, the canvas is already populated) then "update" the chart as follows 
        cnt++;
        document.getElementById('cnt-box').value = cnt;
    } else {
        //retain 20 data points and then start to remove the 1st each iteration
        if (cnt >= 20) {
            myChart.data.labels.shift();
            myChart.data.datasets[0].data.shift();
        }
        myChart.data.labels.push('');
        myChart.data.datasets[0].data.push(amountbtc);
        myChart.update();
        cnt++;
        document.getElementById('cnt-box').value = cnt;
    }
}



function priceMove() {
    let ratio = parseFloat(amountbtc) / parseFloat(amountbtcYest);
    let percentDifference = (ratio * 100) - 100;
    document.querySelector("#priceMoveOutput").textContent = "In the past 24 hours, the market is " + (percentDifference > 0 ? "up" : "down") + " " + Math.abs(percentDifference).toFixed(2) + "%.";
}
