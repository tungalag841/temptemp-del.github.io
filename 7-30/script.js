var backG = document.getElementById('body');
var array = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
var text = document.getElementById('text');
let y = '#'
function randomColor(){
    y="#"
    for(var i = 0; i<=5; i++){
        let s = Math.floor(Math.random()*array.length);
        y +=array[s];
        
    }
    text.innerText = y;
    backG.style.backgroundColor = y;
    console.log(y)
}

