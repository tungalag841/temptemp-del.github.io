//setInterval - melosecond secondiig 1000 huvaasan tootoi tentsene
var Second = document.getElementById('seconds');
var Tens = document.getElementById('tens');
var Minute = document.getElementById('minutes')
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var tens = 0;
var second = 0;
var minute = 0;
var interval;
var i = 0;
buttonStart.addEventListener('click', start);
function start(){
    i = false;
    interval = setInterval(startTimer,1);
}
function startTimer(){
    tens ++;
    if(tens <= 9){
        Tens.innerText = "0" + tens;
    }else{
        Tens.innerText = tens;
    }
    if(tens == 99){
        second ++;
        if(second <= 9){
            Second.innerText = "0" +second
        }else{
            Second.innerText = second
        }
        tens = 0
    }
    if(second == 60){
        minute ++;
        if(minute <= 9){
            Minute.innerText = "0" +minute;
        }else{
            Minute.innerText = minute;
        }
        second = 0;
    }
}
buttonStop.addEventListener('click', stop);
function stop(){
    i = true;
    clearInterval(interval)
}
buttonReset.addEventListener('click',reset);
function reset(){
    if(i == true){
        tens = 0;
        second = 0;
        minute = 0;
        Tens.innerText = "0" +tens;
        Second.innerText = "0" +second;
        Minute.innerText = "0" +minute;
    }
}