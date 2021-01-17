var dollarPerKm = 0;
var total = 0;
var kmPerMin = 0;
var score = 0;

window.onload = function() {
    var totStr = localStorage.getItem('totalStorage');
    console.log(totStr);
    if(totStr == null){
        totStr = "0";
    }
    total = parseInt(totStr);
    document.getElementById("total").innerHTML=(total/100).toFixed(2);

    var scoreStr = localStorage.getItem('score');
    console.log(scoreStr);
    if(scoreStr == null){
        scoreStr = "0";
    }
    score = parseInt(scoreStr);
    document.getElementById("score").innerHTML=score;
} 

function reset(){
    total = 0;
    score = 0;
    localStorage.setItem('totalStorage',JSON.stringify(total));
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('score',JSON.stringify(score));
    document.getElementById("score").innerHTML=score;
}

function final(){
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: '$',
                data: [19, 5, 2, total/100],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Dollars Saved per Week'
            }
        }
    });
    localStorage.setItem('totalStorage',JSON.stringify(total));
    localStorage.setItem('score',JSON.stringify(score));
}

//travel options and calculations
function travel(){
    window.location.href = 'travel.html';
}

function car(){
    perKmMultiplier = 0;
    kmPerMin = 1;
    window.location.href = 'time.html';
}

function walk(){
    dollarPerKm = 1000;
    kmPerMin = 0.083;

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'time.html';
}

function bike(){
    dollarPerKm = 1000;
    kmPerMin = 0.417;

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'time.html';
}

function transit(){
    dollarPerKm = 500;
    kmPerMin = 1;

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'time.html';
}

function time(){
    let time = document.getElementById('time').value;
    total += dollarPerKm * kmPerMin * time;
    
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('totalStorage',JSON.stringify(total));
    document.getElementById("score").innerHTML=score;

    window.location.href = 'index.html';
}



//shopping options and calculations
function shopping(){
    window.location.href = 'bag.html';
}

function bagYes(){
    total += 5;
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('totalStorage',JSON.stringify(total));

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));

    window.location.href = 'local.html';
}

function bagNo(){
    window.location.href = 'local.html';
}

function local(){
    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'index.html';
}

//Lifestyle options and calculations
function lifestyle(){
    window.location.href = 'container.html';
}

function containerYes(){
    window.location.href = 'containerNum.html';
}

function containerNo(){
    window.location.href = 'index.html';
}

function containerNum(){
    let num = document.getElementById('num').value;
    score += 10*num;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'index.html';
}

//Electricity options and calculations
function electricity(){
    window.location.href = 'device.html';
}

function coffee(){
    total += 0.0504 * 13;
}
function WM(){
    total += 0.672 * 13;
}
function kettle(){
    total += 0;
}
function toaster(){
    total += 0;
}
function laptop(){
    total += 4.5 * 13;
}
function phone(){
    total += 0.084 * 13;
}
function dryer(){
    total += 0.672 * 13;
}
function lamps(){
    total += 0.84 * 13;
}
function monitor(){
    total += 0.168 * 13;
}

function elecSubmit(){
    total = Math.ceil(total);
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('totalStorage',JSON.stringify(total));

    window.location.href = 'index.html';
}
