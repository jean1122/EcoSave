var total = 0;
var perKmMultiplier = 0;

window.onload = function() {
   document.getElementById("total").innerHTML=(total/100).toFixed(2);
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
}

//travel options and calculations
function travel(){
    document.getElementById('car').style.display = "block";
    document.getElementById('walk').style.display = "block";
    document.getElementById('bike').style.display = "block";
    document.getElementById('transit').style.display = "block";
}

function car(){
    document.getElementById('dist').style.display = "block";
    document.getElementById('distSubmit').style.display = "block";
    perKmMultiplier = 0;
}

function walk(){
    document.getElementById('dist').style.display = "block";
    document.getElementById('distSubmit').style.display = "block";
    perKmMultiplier = 1000;
}

function bike(){
    document.getElementById('dist').style.display = "block";
    document.getElementById('distSubmit').style.display = "block";
    perKmMultiplier = 1000;
}

function transit(){
    document.getElementById('dist').style.display = "block";
    document.getElementById('distSubmit').style.display = "block";
    perKmMultiplier = 500;
}

function distSubmit(){
    let distance = document.getElementById('dist').value;
    total += perKmMultiplier * distance;
    document.getElementById("total").innerHTML=(total/100).toFixed(2);

    document.getElementById('car').style.display = "none";
    document.getElementById('walk').style.display = "none";
    document.getElementById('bike').style.display = "none";
    document.getElementById('transit').style.display = "none";

    document.getElementById('dist').style.display = "none";
    document.getElementById('distSubmit').style.display = "none";

}



//shopping options and calculations
function shopping(){
    total += 5;
    document.getElementById("total").innerHTML=(total/100).toFixed(2);
}


//Electricity options and calculations
function electricity(){
    document.getElementById("Elec").innerHTML="What do you have plugged in?";
    document.getElementById('coffee').style.display = "block";
    document.getElementById('WM').style.display = "block";
    document.getElementById('kettle').style.display = "block";
    document.getElementById('toaster').style.display = "block";
    document.getElementById('laptop').style.display = "block";
    document.getElementById('phone').style.display = "block";
    document.getElementById('dryer').style.display = "block";
    document.getElementById('lamps').style.display = "block";
    document.getElementById('monitor').style.display = "block";
    document.getElementById('elecOnSubmit').style.display = "block";
}

function elecOnSubmit(){
    document.getElementById('coffee').style.display = "none";
    document.getElementById('WM').style.display = "none";
    document.getElementById('kettle').style.display = "none";
    document.getElementById('toaster').style.display = "none";
    document.getElementById('laptop').style.display = "none";
    document.getElementById('phone').style.display = "none";
    document.getElementById('dryer').style.display = "none";
    document.getElementById('lamps').style.display = "none";
    document.getElementById('monitor').style.display = "none";
    document.getElementById('elecOnSubmit').style.display = "none";

    document.getElementById("Elec").innerHTML="What do you NOT have plugged in?";
    document.getElementById('coffeeOFF').style.display = "block";
    document.getElementById('WMOFF').style.display = "block";
    document.getElementById('kettleOFF').style.display = "block";
    document.getElementById('toasterOFF').style.display = "block";
    document.getElementById('laptopOFF').style.display = "block";
    document.getElementById('phoneOFF').style.display = "block";
    document.getElementById('dryerOFF').style.display = "block";
    document.getElementById('lampsOFF').style.display = "block";
    document.getElementById('monitorOFF').style.display = "block";
    document.getElementById('elecOffSubmit').style.display = "block";
}

function coffeeOFF(){
    total += 10;
}
function WMOFF(){
    total += 10;
}
function kettleOFF(){
    total += 10;
}
function toasterOFF(){
    total += 10;
}
function laptopOFF(){
    total += 10;
}
function phoneOFF(){
    total += 10;
}
function dryerOFF(){
    total += 10;
}
function lampsOFF(){
    total += 10;
}
function monitorOFF(){
    total += 10;
}

function elecOffSubmit(){
    document.getElementById("Elec").innerHTML= "";
    document.getElementById('coffeeOFF').style.display = "none";
    document.getElementById('WMOFF').style.display = "none";
    document.getElementById('kettleOFF').style.display = "none";
    document.getElementById('toasterOFF').style.display = "none";
    document.getElementById('laptopOFF').style.display = "none";
    document.getElementById('phoneOFF').style.display = "none";
    document.getElementById('dryerOFF').style.display = "none";
    document.getElementById('lampsOFF').style.display = "none";
    document.getElementById('monitorOFF').style.display = "none";
    document.getElementById('elecOffSubmit').style.display = "none";

    document.getElementById("total").innerHTML=(total/100).toFixed(2);
}
