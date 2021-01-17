var dollarPerKm = 0;
var kmPerMin = 0;
var total = 0;
var score = 0;

var travelDollarsMissed = 0;
var travelPointsMissed = 0;
var shoppingDollarsMissed = 0;
var shoppingPointsMissed = 0;
var elecDollarsMissed = 0;
var elecPointsMissed = 0;
var lifeDollarsMissed = 0;
var lifePointsMissed = 0;

var isCar = 0;


window.onload = function() {
    var totStr = localStorage.getItem('totalStorage');
    // console.log(totStr);
    if(totStr == null){
        totStr = "0";
    }
    total = parseInt(totStr);
    if(JSON.stringify(window.location.href).includes('scorePage.html')){
        document.getElementById("total").innerHTML=(total/100).toFixed(2);
    }
    
    console.log(total);

    var scoreStr = localStorage.getItem('score');
    // console.log(scoreStr);
    if(scoreStr == null){
        scoreStr = "0";
    }
    score = parseInt(scoreStr);
    if(JSON.stringify(window.location.href).includes('scorePage.html')){
        document.getElementById("score").innerHTML=score;
    }
    console.log(score);

    var dollarPerKmStr = localStorage.getItem('dollarPerKm');
    // console.log(dollarPerKmStr);
    if(dollarPerKmStr == null){
        dollarPerKmStr = "0";
    }
    dollarPerKm = parseInt(dollarPerKmStr);
    console.log(dollarPerKm);

    var kmPerMinStr = localStorage.getItem('kmPerMin');
    // console.log(kmPerMinStr);
    if(kmPerMinStr == null){
        kmPerMinStr = "0";
    }
    kmPerMin = parseInt(kmPerMinStr);
    console.log(kmPerMin);

    var travelDollarsMissedStr = localStorage.getItem('travelDollarsMissed');
    // console.log(travelDollarsMissedStr);
    if(travelDollarsMissedStr == null){
        travelDollarsMissedStr = "0";
    }
    travelDollarsMissed = parseInt(travelDollarsMissedStr);
    console.log(travelDollarsMissed);

    var travelPointsMissedStr = localStorage.getItem('travelPointsMissed');
    // console.log(travelPointsMissedStr);
    if(travelPointsMissedStr == null){
        travelPointsMissedStr = "0";
    }
    travelPointsMissed = parseInt(travelPointsMissedStr);
    console.log(travelPointsMissed);

    var shoppingPointsMissedStr = localStorage.getItem('shoppingPointsMissed');
    // console.log(shoppingPointsMissedStr);
    if(shoppingPointsMissedStr == null){
        shoppingPointsMissedStr = "0";
    }
    shoppingPointsMissed = parseInt(shoppingPointsMissedStr);
    console.log(shoppingPointsMissed);

    var shoppingDollarsMissedStr = localStorage.getItem('shoppingDollarsMissed');
    // console.log(shoppingDollarsMissedStr);
    if(shoppingDollarsMissedStr == null){
        shoppingDollarsMissedStr = "0";
    }
    shoppingDollarsMissed = parseInt(shoppingDollarsMissedStr);
    console.log(shoppingDollarsMissed);

    var elecDollarsMissedStr = localStorage.getItem('elecDollarsMissed');
    // console.log(elecDollarsMissedStr);
    if(elecDollarsMissedStr == null){
        elecDollarsMissedStr = "0";
    }
    elecDollarsMissed = parseInt(elecDollarsMissedStr);
    console.log(elecDollarsMissed);

    var lifePointsMissedStr = localStorage.getItem('lifePointsMissed');
    // console.log(lifePointsMissedStr);
    if(lifePointsMissedStr == null){
        lifePointsMissedStr = "0";
    }
    lifePointsMissed = parseInt(lifePointsMissedStr);
    console.log(lifePointsMissed);

    var isCarStr = localStorage.getItem('isCar');
    // console.log(isCarStr);
    if(isCarStr == null){
        isCarStr = "0";
    }
    isCar = parseInt(isCarStr);
    console.log(isCar);
} 

function reset(){
    total = 0;
    score = 0;
    localStorage.setItem('totalStorage',JSON.stringify(total));
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('score',JSON.stringify(score));
    document.getElementById("score").innerHTML=score;
}

function summary(){
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
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    document.getElementById("score").innerHTML=score;
}

function savings(){
    localStorage.setItem('totalStorage',JSON.stringify(total));
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    localStorage.setItem('score',JSON.stringify(score));
    document.getElementById("score").innerHTML=score;

    // localStorage.setItem('travelDollarsMissed',JSON.stringify(travelDollarsMissed));
    // document.getElementById("travelDollarsMissed").innerHTML=travelDollarsMissed;
    // localStorage.setItem('travelPointsMissed',JSON.stringify(travelPointsMissed));
    // document.getElementById("travelPointsMissed").innerHTML=travelPointsMissed;
    // localStorage.setItem('shoppingDollarsMissed',JSON.stringify(shoppingDollarsMissed));
    // document.getElementById("shoppingDollarsMissed").innerHTML=shoppingDollarsMissed;
    // localStorage.setItem('shoppingPointsMissed',JSON.stringify(shoppingPointsMissed));
    // document.getElementById("shoppingPointsMissed").innerHTML=shoppingPointsMissed;
    // localStorage.setItem('elecDollarsMissed',JSON.stringify(elecDollarsMissed));
    // document.getElementById("elecDollarsMissed").innerHTML=elecDollarsMissed;
    // localStorage.setItem('scelecPointsMissedore',JSON.stringify(elecPointsMissed));
    // document.getElementById("elecPointsMissed").innerHTML=elecPointsMissed;
    // localStorage.setItem('lifeDollarsMissed',JSON.stringify(lifeDollarsMissed));
    // document.getElementById("lifeDollarsMissed").innerHTML=lifeDollarsMissed;
    // localStorage.setItem('lifePointsMissed',JSON.stringify(lifePointsMissed));
    // document.getElementById("lifePointsMissed").innerHTML=lifePointsMissed;

}

//travel options and calculations
function travel(){
    window.location.href = 'travel.html';
}

function car(){
    perKmMultiplier = 0;
    kmPerMin = 1;

    isCar = 1;

    travelPointsMissed += 10;
    window.location.href = 'travel.html#travel_q2_section';
}

function walk(){
    dollarPerKm = 1000;
    kmPerMin = 0.083;

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'travel.html#travel_q2_section';
}

function bike(){
    dollarPerKm = 1000;
    kmPerMin = 0.417;

    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    window.location.href = 'travel.html#travel_q2_section';
}

function transit(){
    dollarPerKm = 500;
    kmPerMin = 1;

    isCar = 2;
    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    console.log(total);
    window.location.href = 'travel.html#travel_q2_section';
}

function time(){
    let time = document.getElementById('dist').value;
    total += dollarPerKm * kmPerMin * time;

    if(isCar == 1){
        travelDollarsMissed += 11 * kmPerMin * time;
    }
    else if(isCar == 2){
        travelDollarsMissed += 350;
    }
    else{
        travelDollarsMissed += 0;
    }

    console.log(total);
    localStorage.setItem('totalStorage',JSON.stringify(total));
    localStorage.setItem('travelDollarsMissed',JSON.stringify(travelDollarsMissed));

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

    window.location.href = 'shopping.html#shopping_q2_section';
}

function bagNo(){
    shoppingPointsMissed += 10;
    localStorage.setItem('shoppingPointsMissed',JSON.stringify(shoppingPointsMissed));
    window.location.href = 'shopping.html#shopping_q2_section';
}

function localNo(){
    shoppingPointsMissed += 10;
    localStorage.setItem('shoppingPointsMissed',JSON.stringify(shoppingPointsMissed));
    window.location.href = 'save.html';
}

function localYes(){
    score += 10;
    localStorage.setItem('score',JSON.stringify(score));
    document.getElementById("score").innerHTML=score;
    window.location.href = 'save.html';
}

//Lifestyle options and calculations
function lifestyle(){
    window.location.href = 'container.html';
}

function containerYes(){
    window.location.href = 'lifestyle.html#lifestyle_q2_section';
}

function containerNo(){
    lifePointsMissed += 10;
    localStorage.setItem('lifePointsMissed',JSON.stringify(lifePointsMissed));
    window.location.href = 'scorePage.html';
}

function containerNum(){
    let num = document.getElementById('num').value;
    score += 10*num;
    localStorage.setItem('score',JSON.stringify(score));
    document.getElementById("score").innerHTML=score;
    window.location.href = 'scorePage.html';
}

//Electricity options and calculations
function electricity(){
    window.location.href = 'device.html';
}

function coffee(){
    total += 0.0504 * 13;
    document.getElementById('coffee').style.backgroundColor = "#9A8B6E";
}
function WM(){
    total += 0.672 * 13;
    document.getElementById('WM').style.backgroundColor = "#9A8B6E";

}
function kettle(){
    total += 0;
    document.getElementById('kettle').style.backgroundColor = "#9A8B6E";
}
function toaster(){
    total += 0;
    document.getElementById('toaster').style.backgroundColor = "#9A8B6E";
}
function laptop(){
    total += 4.5 * 13;
    document.getElementById('laptop').style.backgroundColor = "#9A8B6E";
}
function phone(){
    total += 0.084 * 13;
    document.getElementById('phone').style.backgroundColor = "#9A8B6E";
}
function dryer(){
    total += 0.672 * 13;
    document.getElementById('dryer').style.backgroundColor = "#9A8B6E";
}
function lamps(){
    total += 0.84 * 13;
    document.getElementById('lamps').style.backgroundColor = "#9A8B6E";
}
function monitor(){
    total += 0.168 * 13;
    document.getElementById('monitor').style.backgroundColor = "#9A8B6E";
}

function elecSubmit(){
    total = Math.ceil(total);
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    
    var totStr = localStorage.getItem('totalStorage');
    console.log(totStr);
    if(totStr == null){
        totStr = "0";
    }
    oldTotal = parseInt(totStr);
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
    elecDollarsMissed = 91 - (total - oldTotal);
    
    localStorage.setItem('totalStorage',JSON.stringify(total));
    localStorage.setItem('elecDollarsMissed',JSON.stringify(elecDollarsMissed));

    window.location.href = 'index.html';
}
