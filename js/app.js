$(function () {
    $("#play").on('click', function () {
        $("#reset").show();
        $("#pause").show();
        $("#play").attr('disabled', 'disabled');
        $('.play').css("margin-left", "20px");
    });
});

$(function () {
    $("#reset").on('click', function () {
        $("#reset").hide();
        $("#pause").hide();
        $("#play").removeAttr('disabled', 'disabled');
        $('.play').css("margin-left", "0");
    });
    $("#pause").on('click', function () {
        $("#play").removeAttr('disabled', 'disabled');
    });
});


var min = 0;
var sec = 0;
var milisec = 0;

var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var milisecHead = document.getElementById('milisec');

var interval;

function timer() {
    milisec++
    milisecHead.innerHTML = milisec;
    if (milisec >= 100) {
        sec++
        secHead.innerHTML = sec;
        milisec = 0;
    } else if (sec >= 60) {
        min++
        minHead.innerHTML = min;
        sec = 0;
    }
}

function play() {
    interval = setInterval(timer, 10);
}

function pause() {
    clearInterval(interval);
}

function reset() {
    min = 0;
    sec = 0;
    milisec = 0;

    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    milisecHead.innerHTML = milisec;
    pause();
}